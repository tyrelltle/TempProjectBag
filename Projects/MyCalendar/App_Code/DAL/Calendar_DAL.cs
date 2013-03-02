using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.Utilities;
namespace shaotianchatroom.App_Code.DAL
{
    public class Calendar_DAL
    {


        static public calendar_event insertEvent(Guid UserId_, Guid eventid_, string tittle, string content_, string place_, DateTime createtime_, DateTime start, DateTime end)
        {
            calendar_entity db = new calendar_entity();
            calendar_event newe = new calendar_event()
            {

                UserId = UserId_,
                eventid = eventid_,
                content = content_,
                place = place_,
                createtime = createtime_,
                tittle=tittle,
                 start=start,
                end=end
            };

            db.calendar_event.AddObject(newe);
            db.SaveChanges();
            return newe;
        
        }

        static public void deleteEvent(Guid eventid_)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_event> var = from i in db.calendar_event
                                    where i.eventid == eventid_
                                    select i;
            foreach (calendar_event j in var)
                db.calendar_event.DeleteObject(j);

            db.SaveChanges();
        }

        static public IEnumerable<calendar_event> getEvent(Guid userid, DateTime date)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_event> var = from i in db.calendar_event
                                              where i.UserId == userid && i.createtime == date orderby i.start descending
                                              select i;
            return var;        
        }

        static public IEnumerable<calendar_event> getEventById(Guid eventid)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_event> var = from i in db.calendar_event
                                              where i.eventid==eventid
                                              select i;
            return var;
        }

        static public IEnumerable<calendar_event> getEventByUserId(Guid userid)
        {
            calendar_entity db = new calendar_entity();
            return from i in db.calendar_event
                   where i.UserId == userid
                   select i;
        }


    }
}