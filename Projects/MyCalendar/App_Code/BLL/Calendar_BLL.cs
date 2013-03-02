using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.DAL;
using shaotianchatroom;
namespace shaotianchatroom.App_Code.BLL
{
    public class Calendar_BLL
    {
        
        public calendar_event insertEvent(Guid UserId_, Guid eventid_, string tittle, string content_, string place_, DateTime createtime_, DateTime start, DateTime end)
        {
           return  Calendar_DAL.insertEvent(UserId_, eventid_, tittle, content_, place_, createtime_,start,end);

        }

        public void deleteEvent(Guid eventid_)
        {
            Calendar_DAL.deleteEvent(eventid_);

            //delete reference to this event from other tables



            foreach (calendar_joinevent i in DAL.JoinList_DAL.getJoinList(eventid_))
                DAL.JoinList_DAL.deleteComment(i.UserId, i.eventid);

            foreach (calendar_message i in DAL.EventComment_DAL.getComment(eventid_))
                DAL.EventComment_DAL.deleteComment(i.messageId);

        
        }

        public IEnumerable<calendar_event> getEvent(Guid userid, DateTime date)
        {
            return Calendar_DAL.getEvent(userid, date);
        }

        public static DateTime getStart(Guid eventid)
        {
            return (DateTime) Calendar_DAL.getEventById(eventid).First().start;
        }
        public static DateTime getEnd(Guid eventid)
        {
            return (DateTime)Calendar_DAL.getEventById(eventid).First().end;
        }


        public IEnumerable<calendar_event> getEvent(string username, DateTime date)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_event> ce= (from i in db.calendar_event
             let uid = (from j in db.aspnet_Users
                        where j.UserName == username
                        orderby i.createtime
                        select j.UserId).FirstOrDefault()
             where uid == i.UserId && i.createtime == date
             select i);
            return ce;
        }


       public IEnumerable<calendar_event> getEventByUserId(Guid userid)
        {
            return DAL.Calendar_DAL.getEventByUserId(userid);
        }

        public Guid getEventByIdReternUserId(Guid eventid)
        {
             IEnumerable<calendar_event> tmp= (Calendar_DAL.getEventById(eventid));
             Guid ownerid = (from i in tmp
                             select i.UserId).First();
             return ownerid;
        }

    }
}