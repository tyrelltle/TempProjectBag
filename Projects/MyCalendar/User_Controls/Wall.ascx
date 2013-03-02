<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Wall.ascx.cs" Inherits="shaotianchatroom.User_Controls.Wall" %>
<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit.HTMLEditor" tagprefix="cc1" %>
<style type="text/css">
    .style1
    {
        font-family: "Arial Black";
        font-weight: bold;
    }
    .style2
    {
        color: #00CC00;
    }
</style>
<div>

    <span class="style1">

<a style="font-size:24px;" class="style2"> Wall</a></span>
    <br />
    <asp:TextBox ID="TextBox1" runat="server" BorderColor="#669966" Height="55px" 
        TextMode="MultiLine" Wrap="true" Width="306px"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Submit" onclick="Button1_Click" />
    <asp:UpdatePanel  ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel Width="350px" BorderColor="#669966" BorderWidth="10px" ID="PlaceHolder1" runat="server">
            
                
            </asp:Panel>
            
          

        </ContentTemplate>
        <Triggers>
             <asp:AsyncPostBackTrigger ControlID="Button1" EventName="Click" />
        </Triggers>
    </asp:UpdatePanel>



</div>


