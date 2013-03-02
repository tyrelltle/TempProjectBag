using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Web;
using System.Web.Security;
using shaotianchatroom.App_Code.DAL;
using System.Web.Util;
namespace shaotianchatroom.App_Code.BLL
{

    public class Profile_Wraper
    {
        private calendar_profile extend_profile;
 
        public calendar_profile extendProfile
        {
            get { return extend_profile; }
            set{ extend_profile=value; }
        
        }


        private string usernm;

        public string UserName
        {
            get { return usernm; }
            set { usernm = value; }

        }

        private string email;

        public string Email
        {
            get { return email; }
            set { email = value; }

        }

        private Guid id;

        public Guid Id
        {
            get { return id; }
            set { id = value; }

        }
    }

    public class Profile_BLL
    {
        private calendar_entity db;
        private HttpServerUtility server;
        public Profile_BLL(HttpServerUtility server)
        {
            this.server = server;
            db = new calendar_entity();
        
        }

        public static string urlToMyProfilePage()
        {
            return "Profile.aspx?name=" + Membership.GetUser().UserName + "&id=" + Membership.GetUser().ProviderUserKey;
        }
        public void insert(byte[] img, Guid uid)
        {
            DAL.Profile_DAL.insert(db, img, uid);
        }

        public Profile_Wraper get(Guid uid)
        {
            byte[] img;
            calendar_profile p=DAL.Profile_DAL.get(db,uid);
            if(p==null)
            {
                BinaryReader read = new BinaryReader(File.OpenRead(server.MapPath("/Image/usericon.png")));
                img = read.ReadBytes((int)read.BaseStream.Length);
                
                p= DAL.Profile_DAL.insert(db, img, uid);
            }

            
            Profile_Wraper wrap = new Profile_Wraper { Email=Membership.GetUser(uid,false).Email,
                                                       Id=uid,
                                                       extendProfile=p};
            return wrap;
        }



        public void changeImg(Guid uid, byte[] img)
        {
            DAL.Profile_DAL.changeImg(db, uid, img); 
        }
        public void update(Profile_Wraper wrap)
        {
            wrap.extendProfile.userid = wrap.Id;
            DAL.Profile_DAL.update(db, wrap.extendProfile);
            MembershipUser m= Membership.GetUser(wrap.Id, false);
            m.Email = wrap.Email;
            Membership.UpdateUser(m);
            
        }

       // public  get
    }
}