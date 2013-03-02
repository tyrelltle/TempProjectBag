using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using shaotianchatroom.Utilities;
using System.Web.SessionState;
namespace shaotianchatroom.App_Code.DAL
{
    /*
     note: notification dose not have business logic layer, its covered by the BLL layer of global event
     */
    public class Notification_DAL
    {
        static public void insert(calendar_entity db, calendar_notification newn)
        {
            newn.id = Guid.NewGuid();
            newn.createtime = DateTime.Now;
            db.calendar_notification.AddObject(newn);
            db.SaveChanges();
        }

        static public void deleteByUserIdd(calendar_entity db, Guid userid)
        {
            IEnumerable<calendar_notification> var = from i in db.calendar_notification
                                               where i.userid == userid
                                               select i;
            foreach (calendar_notification i in var)
            {
                db.calendar_notification.DeleteObject(i);
                db.SaveChanges();
            }
        
        
        }

      

        static public IEnumerable<calendar_notification> getByUserId(calendar_entity db, Guid userid)
        {
            return from i in db.calendar_notification
                    where i.userid == userid orderby i.createtime descending
                    select i;

        }

        static public void deleteById(calendar_entity db, Guid id)
        { 
            calendar_notification var = (from i in db.calendar_notification
                                        where i.id==id
                                        select i).First();
          
           
                db.calendar_notification.DeleteObject(var);
                db.SaveChanges();
          
        }

        static public void correspondingAction(calendar_notification not,HttpSessionState session, HttpResponse response)
        {
            calendar_entity db = new calendar_entity();
            string redurl = not.redirecturl;
            Guid userid2 = (Guid)not.userid2.Value;
            string user2name= Membership.GetUser(not.userid2, true).UserName;

            DAL.Notification_DAL.deleteById(db, not.id);
            if (not.eventtype == "addfriend")
            {
                Utilities.Utilities.redirectToFriendHome(session, response,userid2,user2name);

            }

            else if (not.eventtype == "commentedOnWall")
            {
                response.Redirect("Default.aspx");
            }
            else if (not.eventtype == "joinevent")
            {
                response.Redirect(redurl);
            }
            
        }
    }
}