using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.Utilities;
namespace shaotianchatroom.App_Code.DAL
{
    public class Friend_DAL
    {
       
 
        static public void addFriend(Guid target, Guid me)
        {
            calendar_entity db = new calendar_entity();
            calendar_friend f = new calendar_friend()
            {

             friendUserId=target,
             myUserId=me
            };

            db.calendar_friend.AddObject(f);
            db.SaveChanges();
        
        }

        static public void deleteFriend(Guid target, Guid me)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_friend> var = from i in db.calendar_friend
                                    where i.myUserId==me && i.friendUserId ==target
                                    select i;
            foreach (calendar_friend j in var)
                db.calendar_friend.DeleteObject(j);

            db.SaveChanges();
        }

        static public IEnumerable<calendar_friend> getFriend(Guid target, Guid me)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_friend> var = from i in db.calendar_friend
                                              where i.friendUserId == target && i.myUserId == me
                                              select i;
            return var;        
        }

        static public IEnumerable<calendar_friend> getFriendByMyId(Guid me)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_friend> var = from i in db.calendar_friend
                                               where i.myUserId == me
                                               select i;
            
            return var;
        }


    }
}