/*host user id still be 00000*/



using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using shaotianchatroom.Utilities;
using shaotianchatroom.App_Code.BLL;
using System.Web.Security;
using shaotianchatroom.App_Code.DAL;
namespace shaotianchatroom.User_Controls
{
    public partial class Wall : System.Web.UI.UserControl
    {
        Wall_BLL wallcontext = new Wall_BLL();
        GlobalEvent_BLL globalevent_context=new GlobalEvent_BLL(new calendar_entity());
        private Guid owner;

        public Guid Owner
        {
            get { return owner; }
            set { owner = value; }
        
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if(PlaceHolder1!=null)
            init();

            
        }

        private void init()
        {
            PlaceHolder1.Controls.Clear();
           //Guid me=(Guid)Membership.GetUser().ProviderUserKey;
            IEnumerable<nameidcontent> ret=wallcontext.getWallMessageByUser(this.Owner);
            foreach (nameidcontent i in ret)
            {
                User_Controls.wallcomment neww = (User_Controls.wallcomment)Page.LoadControl("User_Controls/wallcomment.ascx");
                neww.Txt =Utilities.Utilities.wrapstring(i.content,40);
                neww.Sender = i.name;
                //neww.ID = i.name;
                neww.Visible = true;
               
                PlaceHolder1.Controls.Add(neww);
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            
           wallcontext.insertWallMessage(this.Owner, (Guid) Membership.GetUser().ProviderUserKey, TextBox1.Text);
           calendar_globalevent newg=new calendar_globalevent() {
                userid =(Guid) Membership.GetUser().ProviderUserKey,
                createtime = DateTime.Today,
                eventtype = "commentedOnWall"
            };
           this.globalevent_context.insertevent(newg, this.Owner);
           init();
        }
    }
}