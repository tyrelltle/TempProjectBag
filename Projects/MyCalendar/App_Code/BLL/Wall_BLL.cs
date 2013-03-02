using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.DAL;
using shaotianchatroom.Utilities;
using System.Web.Security;
namespace shaotianchatroom.App_Code.BLL
{
    public class Wall_BLL
    {
        public int MAX = 20;
        calendar_entity db = new calendar_entity();
        public bool insertWallMessage(Guid target, Guid sender, string content)
        {
            if (content == null || content.Equals(""))
                return false;
            Wall_DAL.insertWallMessage(target, sender, content);

            IEnumerable<calendar_wallmessage> msg = Wall_DAL.getWallMessageByUser(db, target);
            if (msg.Count() > MAX)
            {
                for (int i = MAX; i < msg.Count(); i++)
                {
                    db.calendar_wallmessage.DeleteObject(msg.ElementAt(i));

                }
                db.SaveChanges();
            
            }



            return true;
        }

        private IEnumerable<nameidcontent> getCollectedMsgInfo(IEnumerable<calendar_wallmessage> input)
        { 
            
                    return  from j in db.aspnet_Users
                    join i in input
                    on j.UserId equals i.senderid
                    orderby i.createtime descending
                    select new nameidcontent { content=i.content,
                                              id=i.senderid,
                                              name=j.UserName};
        }

        public IEnumerable<nameidcontent> getWallMessageByUser(Guid owner)
        {
            
            IEnumerable<calendar_wallmessage> tmp= Wall_DAL.getWallMessageByUser(db,owner);
            return getCollectedMsgInfo(tmp);
        }

        public IEnumerable<nameidcontent> getWallMessageByMessageId(Guid id)
        {
            IEnumerable<calendar_wallmessage> tmp = Wall_DAL.getWallMessageByUser(db,id);
            return getCollectedMsgInfo(tmp);
            

        }

        public void deleteMessage(Guid id)
        {
            Wall_DAL.deleteMessage(id);

        }






    }
}