<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FriendHover.ascx.cs" Inherits="shaotianchatroom.User_Controls.FriendHover" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<link href="../Styles/Site.css" rel="stylesheet" type="text/css" />

<asp:Panel ID="panel" CssClass="friendpanel" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <div> 
                <div class="header">
        
                   
                    
                        <asp:Button ID="Button1" runat="server" SkinID="span"  onclick="Button1_Click" 
                            Height="32px" Width="84px" />
                </div>
            
                <asp:Panel ID="content" CssClass="bodyy" Visible="false" runat="server" >  
                    <asp:Panel ID="Panel1" ScrollBars="Both" runat="server">

                       <asp:GridView ID="gv"  AutoGenerateSelectButton="true" OnSelectedIndexChanged="indexchange" Visible="false" runat="server"> </asp:GridView>
                    </asp:Panel>    
                </asp:Panel>

                
                
            </div>
        </ContentTemplate>
        <Triggers>
            <asp:AsyncPostBackTrigger ControlID="Button1" EventName="Click" />
        </Triggers>
    </asp:UpdatePanel>
</asp:Panel>




    <asp:AlwaysVisibleControlExtender   
        ID="AlwaysVisibleControlExtender2"   
        TargetControlID="panel"  
        VerticalSide="Middle"
        VerticalOffset="5"  
        HorizontalSide="Left"
        HorizontalOffset="5"  
        UseAnimation="true"
        
        runat="server" />