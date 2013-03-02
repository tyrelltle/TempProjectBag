using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.App_Code.DAL;
using System.Web.Security;
namespace shaotianchatroom.App_Code
{
    /// <summary>
    /// Summary description for imagehandler
    /// </summary>
    public class imagehandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            Profile_BLL p = new Profile_BLL(context.Server);

            calendar_profile n = p.get((Guid)Membership.GetUser().ProviderUserKey);
            // Response.BinaryWrite(n.img);


            context.Response.ContentType = "image/bmp";

            context.Response.OutputStream.Write(n.img, 78, n.img.Length - 78); 
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