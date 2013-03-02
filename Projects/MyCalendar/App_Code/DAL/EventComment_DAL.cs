using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shaotianchatroom.App_Code.DAL
{
    public class EventComment_DAL
    {
        static public void insertComment(string UserName_, Guid eventid_, string content_ )
        {
            calendar_entity db = new calendar_entity();
            
            calendar_message newm = new calendar_message()
            {
                messageId = Guid.NewGuid(),
                UserName = UserName_,
                content = content_,
                createtime = DateTime.Now,
                eventid = eventid_

            };
            db.calendar_message.AddObject(newm);
            db.SaveChanges();

        }

        static public void deleteComment(Guid messageId_)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_message> var = from i in db.calendar_message
                                              where i.messageId == messageId_
                                              select i;
            foreach (calendar_message j in var)
                db.calendar_message.DeleteObject(j);

            db.SaveChanges();
        }

        static public IEnumerable<calendar_message> getComment(Guid eventid)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_message> evt = (from i in db.calendar_message

                                                 where i.eventid == eventid
                                                 orderby i.createtime descending
                                                 select i);
            return evt;
        }

    }
}