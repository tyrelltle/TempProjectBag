<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="wallcomment.ascx.cs" Inherits="shaotianchatroom.User_Controls.wallcomment" %>
<style type="text/css">
    .style1
    {
        color: #003300;
        font-weight: bold;
        font-family: "Arial Black";
    }
</style>
<asp:Image ID="Image1" runat="server" Height="32px" Width="37px" />
<asp:Button ForeColor="Blue" BorderStyle="None" BackColor="White" ID="Button1" 
    runat="server" Text="Button" 
    style="font-weight: 700; font-family: 'Arial Black'; font-size: 20px;" 
    Height="28px" Width="77px" />
&nbsp; <span class="style1">said</span>


<div style="background-color:#666699;Width:340px; color:White">

<asp:Literal ID="content" runat="server"></asp:Literal>



</div>
<p>
<asp:Button ForeColor="Blue" BorderStyle="None" BackColor="White" ID="btreply" 
    runat="server" Text="Reply" 
    style="font-weight: 700; font-family: 'Arial Black'; font-size: 10px;" 
    Height="16px" Width="51px" onclick="btreply_Click" />
</p>
<asp:Panel ID="pnlrpy" Visible="false" runat="server">

 <asp:TextBox ID="TextBox1" runat="server" TextMode="MultiLine"></asp:TextBox>
<asp:Button ID="sendbt" runat="server" Text="send" Width="49px" 
        onclick="sendbt_Click" />

<asp:Button ID="cancelbt" runat="server" Text="cancel" Width="53px" 
        onclick="cancelbt_Click" />

</asp:Panel>