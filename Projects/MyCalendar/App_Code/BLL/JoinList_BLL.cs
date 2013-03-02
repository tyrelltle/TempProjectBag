using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.DAL;
namespace shaotianchatroom.App_Code.BLL
{
    public class JoinList_BLL
    {
         public void insertJoin(Guid visiterid, Guid eventid)
        {
             JoinList_DAL.insertJoin(visiterid, eventid);

        }

         public void deleteComment(Guid visiterid, Guid eventid)
        {
            JoinList_DAL.deleteComment(visiterid, eventid);
        }

         public IEnumerable<shaotianchatroom.Utilities.withid> getJoinList(Guid eventid)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_joinevent> var = JoinList_DAL.getJoinList(eventid);
            IEnumerable<shaotianchatroom.Utilities.withid> joiners = (from i in var
                                                                      join j in db.aspnet_Users
                                                                      on i.UserId equals j.UserId
                                               
                                                                      select new shaotianchatroom.Utilities. withid
                                                                      {
                                                                        Friend = j.UserName,
                                                                        id = j.UserId
                                                                      });

            return joiners;
        }
    }
}