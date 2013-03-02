using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.DAL;
using System.Web.Security;
using shaotianchatroom.Utilities;
namespace shaotianchatroom.App_Code.BLL
{
    public class SearchFriendProperty
    {
        
            public string name
            {
                get;
                set;
            }

            public string email
            { get; set; }

            public DateTime last_logged_in
            { get; set; }

            public DateTime last_logged_out
            { get; set; }

            public string comment
            { get; set; }

             public Guid userid
            { get; set; }



    }
    public class Friend_BLL
    {
        calendar_entity db = new calendar_entity();
        public bool addFriend(Guid target, Guid me)
        {
           IEnumerable<calendar_friend> tmp= Friend_DAL.getFriendByMyId(me);
           calendar_friend tmp2=new calendar_friend(){ myUserId=me, friendUserId=target};
           if (tmp.Contains(tmp2))
               return false;

           Friend_DAL.addFriend(target, me);
           return true;
        }

        public bool removeFriend(Guid target, Guid me)
        {
            IEnumerable<calendar_friend> tmp = Friend_DAL.getFriendByMyId(me);
            calendar_friend tmp2 = new calendar_friend() { myUserId = me, friendUserId = target };
            if (!tmp.Contains(tmp2))
                return false;

            Friend_DAL.deleteFriend(target, me);
            return true;
        }

        public IEnumerable<withid> getFriendNames(Guid me)
        {

            IEnumerable<calendar_friend> tmp = Friend_DAL.getFriendByMyId(me);
            IEnumerable < withid >ret= from i in tmp
                                    join j in db.aspnet_Users
                                    on i.friendUserId equals j.UserId
                                    select new withid { id=i.friendUserId, Friend=j.UserName };
            return ret;
        }

        public IEnumerable<SearchFriendProperty> searchUserForFriends(string name, string myname)
        {//search all users with the same passed-in name 

            IEnumerable<SearchFriendProperty> result = from i in db.aspnet_Membership

                                         join j in db.aspnet_Users

                                         on i.UserId equals j.UserId

                                         where (j.UserName == name && j.UserName != myname)

                                         select new SearchFriendProperty
                                         {
                                             name = j.UserName,
                                             email = i.Email,
                                             last_logged_in = i.LastLoginDate,
                                             last_logged_out = i.LastLockoutDate,
                                             comment = i.Comment,
                                             userid = j.UserId
                                         };
            return result;
        }
    }
}