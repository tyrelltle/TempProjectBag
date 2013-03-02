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
    public partial class Profile : System.Web.UI.Page
    {
        Profile_BLL p;
        protected void Page_Load(object sender, EventArgs e)
        {
            p = new Profile_BLL(Server);
            
            

            Profile_Wraper pw = p.get((Guid)Membership.GetUser().ProviderUserKey);

            Image1.ImageUrl = "../handler1.ashx?id=" + pw.Id;
            if (!IsPostBack)
            {
                email.Text = pw.Email;
                sex.Text = pw.extendProfile.sex;
                name.Text = pw.extendProfile.name;
                dislike.Text = pw.extendProfile.Dislike;
                favor.Text = pw.extendProfile.Favorate;
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            BinaryReader r = new BinaryReader(this.FileUpload1.PostedFile.InputStream);
            p.changeImg((Guid)Membership.GetUser().ProviderUserKey, r.ReadBytes((int)r.BaseStream.Length));
        }

        protected void Button1_Click1(object sender, EventArgs e)
        {
            Profile_Wraper pw = new Profile_Wraper();
            pw.extendProfile = new calendar_profile();
            pw.Email=email.Text ;
            pw.extendProfile.sex=sex.Text  ;
            pw.extendProfile.name=name.Text  ;
           pw.extendProfile.Dislike =dislike.Text  ;
           pw.extendProfile.Favorate =favor.Text  ;
           pw.Id =(Guid) Membership.GetUser().ProviderUserKey;
           p.update(pw);
           Response.Redirect("Default.aspx");
        }
    }
}