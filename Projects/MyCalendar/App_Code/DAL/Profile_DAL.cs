using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing.Imaging;
namespace shaotianchatroom.App_Code.DAL
{
    public class Profile_DAL
    {
        public static calendar_profile insert(calendar_entity db,byte[] img, Guid uid)
        {

            calendar_profile newp = new calendar_profile { userid = uid, img = img };
            db.calendar_profile.AddObject(newp);
            db.SaveChanges();
            return newp;
        }


        public static calendar_profile get(calendar_entity db, Guid uid)
        {
            IEnumerable< calendar_profile> p=from i in db.calendar_profile
                                             where i.userid == uid
                                             select i;
            if(p.Count()>0)
                return p.First();
            else 
                return null;
          
        }

        public static void changeImg(calendar_entity db, Guid uid, byte[] img)
        {
            calendar_profile p = DAL.Profile_DAL.get(db, uid);
            p.img = img;
            db.SaveChanges();
        }


        public static void update(calendar_entity db, calendar_profile newp)
        {
            calendar_profile p = (from i in db.calendar_profile
                                  where i.userid == newp.userid
                                  select i).First();
            p.sex = newp.sex;
            p.name = newp.name;
            p.Favorate = newp.Favorate;
            p.Dislike = newp.Dislike;
            db.SaveChanges();
           
            
        }
    }
}