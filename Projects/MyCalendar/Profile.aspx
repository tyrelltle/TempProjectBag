<%@ Page Language="C#" MasterPageFile="~/Site.Master" Theme="Theme1" AutoEventWireup="true" CodeBehind="Profile.aspx.cs" Inherits="shaotianchatroom.Profile" %>


<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    User:<br />
   <%= Membership.GetUser().UserName%>
   <br />
   Photo:<br />
    <asp:Image ID="Image1" SkinId="smalluserimg" runat="server" /><asp:FileUpload ID="FileUpload1" runat="server" /><asp:Button
        ID="changeimgBt" runat="server" OnClick="Button1_Click" Text="Upload Image" />
    <br />
    <br />


    <table border="0">
                        <tr>
                            <td><span class="profileItem"> Full Name:</span></td>
                            <td><asp:TextBox ID="name" runat="server" Text="not specified"></asp:TextBox></td>
                        </tr> 
                        <tr>
                            <td><span class="profileItem">Sex:</span></td>
                            <td><asp:TextBox ID="sex" runat="server" Text="not specified"></asp:TextBox></td>
                        </tr>
                        
                        <tr>
                            <td><span class="profileItem"> Email:</span></td>
                            <td><asp:TextBox ID="email" runat="server" Text="not specified"></asp:TextBox></td>
                        </tr>
                        
                        <tr>
                            <td><span class="profileItem"> Favorates:</span></td>
                            <td><asp:TextBox ID="favor" runat="server" Text="not specified"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td><span class="profileItem"> Dislikes:</span></td>
                            <td><asp:TextBox ID="dislike" runat="server" Text="not specified"></asp:TextBox></td>
                        </tr>
                        </table>

                        <asp:Button ID="Button1" runat="server" 
        Text="Sumit non-image Changes" onclick="Button1_Click1" />

                        <br />






</asp:Content>
