using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using shaotianchatroom.Utilities;
using shaotianchatroom.App_Code.BLL;
namespace shaotianchatroom.App_Code
{

    

   
    public partial class AddFriend : System.Web.UI.UserControl
    {
       
        GlobalEvent_BLL globaleventContext=new GlobalEvent_BLL(new calendar_entity());

        public class noid_
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


        }

        public class onlyid_
        {
            public Guid userid
            { get; set; }



        }   
        Friend_BLL friendcontext = new Friend_BLL();
        protected void Page_Load(object sender, EventArgs e)
        {
          
            //if ((IQueryable<noid>)Session["searchfriendnoid"] != null)
            //    this.gv.DataSource = (IQueryable<noid>)Session["searchfriendnoid"];
            //    this.gv.DataBind();

        }

        protected void bt_newEvent(object sender, EventArgs e)
        {
           // this.Label1.Visible = true;
        }

        protected void bt_nonewe(object sender, EventArgs e)
        {

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            calendar_entity db = new calendar_entity();
            string name=txtname.Text;
            string myname=Membership.GetUser().UserName;
            IEnumerable<SearchFriendProperty> result = friendcontext.searchUserForFriends(name, myname);




            IEnumerable<noid_> noid = from i in result
                       select new noid_ {name=i.name,
                                        email=i.email,
                                        last_logged_in=i.last_logged_in,
                                        last_logged_out=i.last_logged_out,
                                        comment=i.comment};


            IEnumerable<onlyid_> onlyd = from i in result
                           select new onlyid_ { userid = i.userid };


            Session["searchfriendonlyid"]=onlyd;
            Session["searchfriendnoid"] = noid;
            gv.DataSource = noid;
            
            gv.DataBind();
           
            this.Controls.Add(gv);
            gv.Visible = true;

        }

        protected void indexchange(object sender, EventArgs e)
        {
            calendar_entity db = new calendar_entity();
            
            IEnumerable<onlyid_> searchRes = (IEnumerable<onlyid_>)Session["searchfriendonlyid"];
            Guid selected= searchRes.ElementAtOrDefault( gv.SelectedIndex).userid;

            Guid myid=(Guid)Membership.GetUser().ProviderUserKey;

            var res = from i in db.calendar_friend

                      where i.myUserId == myid && i.friendUserId == selected
                      select i;


            if(res.Count()==0)
            {
                calendar_friend newf=new calendar_friend();
                newf.friendUserId=selected;
                newf.myUserId=myid;
                newf.relationship="";
                db.calendar_friend.AddObject(newf);
                db.SaveChanges();
            }

            calendar_globalevent newg=new calendar_globalevent() {
                userid =(Guid) Membership.GetUser().ProviderUserKey,
                createtime = DateTime.Today,
                eventtype = "addfriend"
            };
            globaleventContext.insertevent(newg, selected);
        }
    }
}