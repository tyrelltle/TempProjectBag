<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Notification.ascx.cs" Inherits="shaotianchatroom.User_Controls.Notification" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<link href="../Styles/Site.css" rel="stylesheet" type="text/css" />


<asp:Panel ID="panel" CssClass="friendpanel" runat="server">
 <asp:Timer ID="Timer1" runat="server"  interval="5000" ontick="UpdateTimer_Tick">
    </asp:Timer>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
           
            <div> 
                <div class="header">
        
                   
                    
                        <asp:Button ID="Button1" runat="server" SkinID="span3"  onclick="Button1_Click" 
                            Height="32px" Width="84px" />
                </div>
            
                <asp:Panel ID="content" CssClass="bodyy" Visible="false"  runat="server" >  
                        <br />

                    <asp:Panel ID="Panel1" ScrollBars="Both" runat="server">
                    
                    <asp:GridView ID="GridView1" AutoGenerateSelectButton="true" OnSelectedIndexChanged="indexchanged" runat="server">
                    </asp:GridView>

                    </asp:Panel>


                </asp:Panel>

                
                
            </div>
        </ContentTemplate>
        <Triggers>
            <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
        </Triggers>
    </asp:UpdatePanel>
</asp:Panel>




    <asp:AlwaysVisibleControlExtender   
        ID="AlwaysVisibleControlExtender2"   
        TargetControlID="panel"  
        VerticalSide="Middle"
        VerticalOffset="200"  
        HorizontalSide="Left"
        HorizontalOffset="5"  
        UseAnimation="true"
        
        runat="server" />