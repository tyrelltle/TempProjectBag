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
   
    public partial class GlobalEvent : System.Web.UI.UserControl
    {
        Friend_BLL friendcontext = new Friend_BLL();
        GlobalEvent_BLL globalevent_context=new GlobalEvent_BLL(new calendar_entity());
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
               Session["showpanel2"] = false;
            if ((bool)Session["showpanel2"])
                fetchdata();
        }
    
        protected void Button1_Click(object sender, EventArgs e)
        {
            Boolean b = (Boolean)Session["showpanel2"];
            b = !b;
           content.Visible = b;

           Session["showpanel2"] = b;            
            if (b)
            {
                fetchdata();
            
            }
        }

        protected void fetchdata()
        {
            string txt="";

            var var=globalevent_context.geteventByUser((Guid) Membership.GetUser().ProviderUserKey);      
            
            foreach (calendar_globalevent i in var)
            {
                txt+=i.content+"<br/>";
            }
            Literal1.Text=txt;
        }


    }
}