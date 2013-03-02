using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using shaotianchatroom.Utilities;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.App_Code.DAL;
using shaotianchatroom.Utilities;
namespace shaotianchatroom.User_Controls
{

    public partial class Notification : System.Web.UI.UserControl
    {
        Friend_BLL friendcontext = new Friend_BLL();
        GlobalEvent_BLL globalevent_context = new GlobalEvent_BLL(new calendar_entity());
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Session["showpanel3"] = false;
                Session["typelist"] = null;
            }
           // if ((bool)Session["showpanel3"])
            if(Membership.GetUser()!=null)
                fetchdata();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Boolean b = (Boolean)Session["showpanel3"];
            b = !b;
           content.Visible = b;

           Session["showpanel3"] = b;            
            if (b)
            {
                fetchdata();
            
            }
        }

        protected void fetchdata()
        {
           

            var var=Notification_DAL.getByUserId(new calendar_entity(),(Guid) Membership.GetUser().ProviderUserKey);      
            
            if((Boolean)Session["showpanel3"])
            {   
                List<string> txt=new List<String>();
                
                foreach (calendar_notification i in var)
                {
                   txt.Insert(txt.Count(), i.content);
                }
                GridView1.DataSource =txt;
                GridView1.DataBind();
                Session["typelist"] = var;
            }
            Button1.Text = "Notification(" + var.Count() + ")";
        }

        protected void UpdateTimer_Tick(object o, EventArgs e)
        {
            if(Membership.GetUser()!=null)
            fetchdata();
        }

        protected void indexchanged(object sender, EventArgs e)
        {
            calendar_entity db = new calendar_entity();

            var var=(IEnumerable<calendar_notification>)Session["typelist"];
            Notification_DAL.correspondingAction(var.ElementAt(GridView1.SelectedIndex), Session, Response);
            //globalevent_context.deleteNotification(var.ElementAt(GridView1.SelectedIndex).id);
        }
    }
}