using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using shaotianchatroom.Utilities;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.Utilities;
namespace shaotianchatroom.User_Controls
{

    public partial class FriendHover : System.Web.UI.UserControl
    {
        Friend_BLL friendcontext = new Friend_BLL();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
                ViewState["showpanel"] = false;

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Boolean b = (Boolean)ViewState["showpanel"];
            b = !b;
           content.Visible = b;
           gv.Visible = b;
            ViewState["showpanel"]=b;            
            if (b)
            {
                fetchdata();
            
            }
        }

        protected void fetchdata()
        {
            calendar_entity db = new calendar_entity();
            Guid me=(Guid)Membership.GetUser().ProviderUserKey;
            IEnumerable<withid> res =friendcontext.getFriendNames(me);
            //from i in db.calendar_friend
            //          join j in db.aspnet_Users
            //          on i.friendUserId equals j.UserId
            //          where i.myUserId == me
            //           select new withid { Friend = j.UserName,
            //                               id=j.UserId};
            var output = from i in res
                         select new noid { Friend = i.Friend };
            this.gv.DataSource = output;
            this.gv.DataBind();
            Session["friendlist"] = res;
   
        
        }

        protected void indexchange(object sender, EventArgs e)
        {
            calendar_entity db = new calendar_entity();

            IEnumerable<withid> searchRes = (IEnumerable<withid>)Session["friendlist"];
            Session["selectedfriend_id"] = searchRes.ElementAtOrDefault(gv.SelectedIndex).id;
            Session["selectedfriend_name"] = searchRes.ElementAtOrDefault(gv.SelectedIndex).Friend;
            Response.Redirect("FriendCalendar.aspx");
           
        }
    }
}