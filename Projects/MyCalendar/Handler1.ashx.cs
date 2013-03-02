using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.App_Code.DAL;
using System.Web.Security;
namespace shaotianchatroom
{
    /// <summary>
    /// Summary description for Handler1
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            Guid id = Guid.Parse( context.Request.QueryString["id"]);
            Profile_BLL p = new Profile_BLL(context.Server);

            calendar_profile n = (p.get(id)).extendProfile;
            //// Response.BinaryWrite(n.img);
            // context.Response.ContentType = "image/png";
             context.Response.BinaryWrite(n.img);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}