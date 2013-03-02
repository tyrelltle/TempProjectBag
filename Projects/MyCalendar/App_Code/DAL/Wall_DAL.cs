using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
/*
    this class describes the context of wall message of each users
 
 */
namespace shaotianchatroom.App_Code.DAL
{
    public class Wall_DAL
    {
        static public void insertWallMessage(Guid target, Guid sender,string content)
        {
            
            calendar_entity db=new calendar_entity();
            calendar_wallmessage newm=new calendar_wallmessage()
                { messageId=Guid.NewGuid(),
                  senderid=sender,
                  UserId=target,
                  createtime=DateTime.Now,
                  content=content
                  };
            db.calendar_wallmessage.AddObject(newm);
       
            db.SaveChanges();
          
            
        }

        static public IEnumerable<calendar_wallmessage> getWallMessageByUser(calendar_entity db, Guid owner)
        {
          
            IEnumerable<calendar_wallmessage> ret = from i in db.calendar_wallmessage
                                                    where i.UserId == owner orderby i.createtime descending
                                                    select i;
            return ret;

        }

        static public IEnumerable<calendar_wallmessage> getWallMessageByMessageId(Guid id)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_wallmessage> ret = from i in db.calendar_wallmessage
                                                    where i.messageId == id
                                                    select i;
            return ret;

        }

        static public void deleteMessage(Guid id)
        {
            calendar_entity db = new calendar_entity();
            IEnumerable<calendar_wallmessage> ret = Wall_DAL.getWallMessageByMessageId(id);
            foreach (calendar_wallmessage i in ret)
                db.calendar_wallmessage.DeleteObject(i);
            db.SaveChanges();

        }
    }
}