using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using shaotianchatroom.App_Code.BLL;
using System.Web.Security;
using shaotianchatroom.App_Code.DAL;
using shaotianchatroom.Utilities;
namespace shaotianchatroom.User_Controls
{
    public partial class wallcomment : System.Web.UI.UserControl
    {
        private string sender;
        private string txt;
        Wall_BLL wallcontext = new Wall_BLL();
        GlobalEvent_BLL globalevent_context = new GlobalEvent_BLL(new calendar_entity());
        public string Txt
        {
            get { return txt; }
            set { txt = value; }
        }

        public string Sender
        {
            get { return sender; }
            set { sender = value; }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
           this.Image1.ImageUrl = "../handler1.ashx?id=" + Utilities.Utilities.getUserIdByName(this.sender);

            this.Button1.Text = this.sender;
            this.content.Text = txt;
            //if (!IsPostBack)
            //    Session["reply"] = false;
            //if ((bool)Session["reply"])
            //    this.pnlrpy.Visible = true;
            //else
            //    this.pnlrpy.Visible = false;
           
        }

        protected void btreply_Click(object sender, EventArgs e)
        {
           // Session["reply"] = true;
            this.pnlrpy.Visible = true;
        }

        protected void sendbt_Click(object sender, EventArgs e)
        {
          //  Session["reply"] = false;
            this.pnlrpy.Visible = false;


            wallcontext.insertWallMessage(Utilities.Utilities.getUserIdByName( this.sender), (Guid)Membership.GetUser().ProviderUserKey, TextBox1.Text);
            calendar_globalevent newg = new calendar_globalevent()
            {
                userid = (Guid)Membership.GetUser().ProviderUserKey,
                createtime = DateTime.Today,
                eventtype = "commentedOnWall"
            };
            this.globalevent_context.insertevent(newg, Utilities.Utilities.getUserIdByName(this.sender));
        }

        protected void cancelbt_Click(object sender, EventArgs e)
        {
           // Session["reply"] = false;
            this.pnlrpy.Visible = false;
        }

     


        
      
    }
}