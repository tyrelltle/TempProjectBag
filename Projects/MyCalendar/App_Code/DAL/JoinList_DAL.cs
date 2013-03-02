using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
/*
 this class describes the context of the list users joined current event
 */
namespace shaotianchatroom.App_Code.DAL
{
    public class JoinList_DAL
    {
        static public void insertJoin(Guid visiterid, Guid eventid)
        {
            calendar_entity db = new calendar_entity();
            calendar_joinevent newjoin = new calendar_joinevent();
            newjoin.eventid = eventid;
            newjoin.UserId = visiterid;
            db.calendar_joinevent.AddObject(newjoin);
            db.SaveChanges();

        }

        static public void deleteComment(Guid visiterid, Guid eventid)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_joinevent> var = from i in db.calendar_joinevent
                                                where i.UserId == visiterid && i.eventid==eventid
                                                select i;
            foreach (calendar_joinevent j in var)
                db.calendar_joinevent.DeleteObject(j);

            db.SaveChanges();
        }

        static public IEnumerable<calendar_joinevent> getJoinList(Guid eventid)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_joinevent> var = from i in db.calendar_joinevent
                                                  where i.eventid == eventid
                                                  select i;
            return var;
        }
    }
}