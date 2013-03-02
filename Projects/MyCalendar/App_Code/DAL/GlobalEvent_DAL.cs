using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shaotianchatroom.App_Code.DAL
{
    public class GlobalEvent_DAL
    {
        public static int MAX = 20;
        public  static void insertevent(calendar_entity db, calendar_globalevent newe)
        {
            DateTime date=DateTime.Now;
            if (newe != null)
            {
                newe.eventid = Guid.NewGuid();
                newe.createtime=date;
                db.calendar_globalevent.AddObject(newe);
            
                
                db.SaveChanges();


                //cut extra events
                IEnumerable<calendar_globalevent> var = DAL.GlobalEvent_DAL.geteventByUser(db, newe.userid);
               
                if (var.Count() > MAX)
                {
                    for (int i = MAX; i < var.Count(); i++)
                    {
                        db.calendar_globalevent.DeleteObject(var.ElementAt(i));
                       
                    }
                }
                 db.SaveChanges();
            
            }


        }

        public static void deleteevent(calendar_entity db, Guid eventid)
        {
            calendar_globalevent var = (from i in db.calendar_globalevent
                                                    where i.eventid == eventid
                                                    select i).First();
            db.calendar_globalevent.DeleteObject(var);
            db.SaveChanges();
        }

        public static calendar_globalevent getevent(calendar_entity db, Guid eventid)
        {
            return (from i in db.calendar_globalevent
                                        where i.eventid == eventid
                                        select i).First();
        }

        public static IEnumerable< calendar_globalevent> geteventByUser(calendar_entity db, Guid userid)
        {
            List<Guid> a;
            IEnumerable<Guid> ids = from i in db.aspnet_Users  
                                    where i.UserId == userid
                                        select i.UserId;
           
            IEnumerable<Guid> ids2=(from i in db.calendar_friend
                      where i.myUserId==userid
                      select i.friendUserId);//my friends
            //friends.Union( );
            IEnumerable<Guid> ids3 = ids.ToArray<Guid>().Union<Guid>(ids2.ToArray<Guid>());

            IEnumerable<Guid> ids4 = from i in db.calendar_friend
                                     join j in db.calendar_globalevent
                                     on i.myUserId equals j.userid
                                     where i.friendUserId == userid
                                     select j.userid;
            ids4 = ids4.ToArray<Guid>().Union<Guid>(ids3);
                                     
                                     //users that added me as friend
            IEnumerable<calendar_globalevent> ret = from j in ids4
                                                    join w in db.calendar_globalevent
                                                    on j equals w.userid
                                                    where 1==1 orderby w.createtime descending
                                                    select w;
            return ret;

                  
        }
    }
}