using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using shaotianchatroom.App_Code.BLL;
using System.Web.Security;
using System.IO;
namespace shaotianchatroom
{
    public partial class chatroom : System.Web.UI.Page
    {
        Profile_BLL p;
        protected void Page_Load(object sender, EventArgs e)
        {Response.Write(TimeSelector1.Minute + " " + TimeSelector1.Hour);
            
        }

        protected void Button1_Click(object sender, EventArgs e)
        {

        }

      
       
    }
}