using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using shaotianchatroom;
using shaotianchatroom.App_Code.DAL;
using System.Web.Security;

namespace shaotianchatroom.App_Code.BLL
{
    
    public class GlobalEvent_BLL
    {
        calendar_entity db;
        public GlobalEvent_BLL(calendar_entity db)
        {
            this.db = db;
        }

        public void insertevent(calendar_globalevent newe, Guid target )
        {
            string sourceuser= (Membership.GetUser(newe.userid,true)).UserName;
            string targuser="";
            calendar_notification newnot = null;
            if(target!=null)
               targuser = (Membership.GetUser(target,true)).UserName;

            if (newe.eventtype == "addfriend")
            {
                //here we dont need to init redirecturl, because we only need it when the event is "new calendar event added", which redirecturl is the link to the new event
                newe.content = sourceuser + " added " + targuser + " as a friend !";
                DAL.GlobalEvent_DAL.insertevent(db, newe);
                if (!sourceuser.Equals(targuser))
                {
                    //add notification says someone added him as friend
                    newnot = new calendar_notification();
                    newnot.eventtype = "addfriend";
                    newnot.content = sourceuser + " added you as friend";
                    newnot.userid = target;
                    newnot.userid2 = newe.userid;
                    DAL.Notification_DAL.insert(db, newnot);

                }
            }

            else if (newe.eventtype == "commentedOnWall")
            {
                //here we dont need to init redirecturl, because we only need it when the event is "new calendar event added", which redirecturl is the link to the new event
                newe.content = sourceuser + " Commented on " + targuser + "'s wall !";
                DAL.GlobalEvent_DAL.insertevent(db, newe);
                if (!sourceuser.Equals(targuser))
                {
                    //add notification says someone commented on his wall
                    newnot = new calendar_notification();
                    newnot.content = sourceuser + " commented on your wall";
                    newnot.userid = target;
                    newnot.userid2 = newe.userid;
                    newnot.eventtype = "commentedOnWall";
                    DAL.Notification_DAL.insert(db, newnot);
                }
            }
            else if (newe.eventtype == "addedcalevent")
            {
                //here we dont need to init redirecturl, because we only need it when the event is "new calendar event added", which redirecturl is the link to the new event
                newe.content = sourceuser + " Created Calendar Event: " + targuser + "'s wall !";
                DAL.GlobalEvent_DAL.insertevent(db, newe);
            }

            
        }

        public void insertevent(calendar_globalevent newe, Page page,calendar_event evt )
        {/*handels new calendar event case, eventtittle is the event tittle*/
            string sourceuser = (Membership.GetUser(newe.userid, true)).UserName;
            string targuser  = (Membership.GetUser(evt.UserId, true)).UserName;
            calendar_notification newnot = null;
            if (newe.eventtype == "addedcalevent")
            {
                //here we dont need to init redirecturl, because we only need it when the event is "new calendar event added", which redirecturl is the link to the new event
                newe.content = sourceuser + " Created Calendar Event: " + evt.tittle;
            }
            else if (newe.eventtype == "joinevent")
            {
                newe.content = sourceuser + " joined " + targuser+" 's Event: "+evt.tittle;

                if (!sourceuser.Equals(targuser))
                {
                    newnot = new calendar_notification();
                    newnot.content = sourceuser + " Joined your event: "+evt.tittle;
                    newnot.userid = evt.UserId;
                    newnot.userid2 = newe.userid;
                    newnot.eventtype = "joinevent";
                    newnot.redirecturl = "eventroom.aspx?eventid=" + evt.eventid + "&tittle=" + evt.tittle + "&event=" +
                                        page.Server.UrlEncode(evt.content) + "&username=" + Membership.GetUser().UserName +
                                       "&date=" + evt.createtime + "&place=" + evt.place;
                    DAL.Notification_DAL.insert(db, newnot);
                }
            }
                newe.redirecturl = "eventroom.aspx?eventid=" + evt.eventid + "&tittle=" + evt.tittle + "&event=" +
                                    page. Server.UrlEncode(evt.content) + "&username=" + Membership.GetUser().UserName +
                                   "&date=" + evt.createtime + "&place=" + evt.place;

                DAL.GlobalEvent_DAL.insertevent(db, newe);
            

        }
        public void deleteevent(Guid eventid)
        {
            DAL.GlobalEvent_DAL.deleteevent(db, eventid);
        }

        public calendar_globalevent getevent( Guid eventid)
        {
            return DAL.GlobalEvent_DAL.getevent(db, eventid);
        }

        public IEnumerable<calendar_globalevent> geteventByUser(Guid userid)
        {
            return DAL.GlobalEvent_DAL.geteventByUser(db, userid);
        }


        public void deleteNotification(Guid id)
        {
            DAL.Notification_DAL.deleteById(db, id);
        }

    }
}