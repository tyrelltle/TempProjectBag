using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.DAL;
namespace shaotianchatroom.App_Code.BLL
{
    public class EventComment_BLL
    {
         public void insertComment(string UserName_, Guid eventid_, string content_ )
        {
            EventComment_DAL.insertComment(UserName_, eventid_, content_);
        }

         public void deleteComment(Guid messageId_)
        {
            EventComment_DAL.deleteComment(messageId_);
        }

         public IEnumerable< calendar_message> getComment(Guid eventid)
        {
            return EventComment_DAL.getComment(eventid);
        }

    }
}