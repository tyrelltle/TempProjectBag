<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="joinevent.ascx.cs" Inherits="shaotianchatroom.User_Controls.joinevent" %>


<style type="text/css">
    .style1 a
    {
        color: #FF6600;
        font-weight: bold;
        font-family: "Times New Roman", Times, serif;
    }
</style>
<p style="text-align: left">
    <asp:Button ID="Button1" BackColor="White" BorderStyle="None" ForeColor="Green" 
        Font-Size="25px" runat="server" Text="Join This Event" Height="30px" 
        style="text-align: center" Width="188px" Visible="false" 
        onclick="Button1_Click" />



    </p>
    <%            showbutton();

            displayJoiners(); %>
<asp:Panel ID="Panel1" Width="500px" BackColor="White" BorderColor="Green" BorderWidth="4px" 
    runat="server" style="text-align: center">

    

    <h3>
        People Joined this event</h3>
    <span class="style1">
        
        <asp:PlaceHolder ID="joinlist" runat="server"></asp:PlaceHolder>&nbsp;</span><br />
    <br />



<br />
</asp:Panel>
