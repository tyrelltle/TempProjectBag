<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AddFriend.ascx.cs" Inherits="shaotianchatroom.App_Code.AddFriend" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>


      
<%-- <asp:UpdatePanel ID="up1" runat="server">
        <ContentTemplate>--%>

        <asp:Label
            id="lblFavoriteColor"
            Text="Enter The User Name of the person you want to add:"
            Runat="server" />
        <asp:TextBox
            id="txtname"
            Runat="server" />
        <asp:Button
            id="btnSubmit"
            Text="Submit"
            Runat="server" OnClick="btnSubmit_Click" />

            <asp:GridView AutoGenerateSelectButton="true" OnSelectedIndexChanged="indexchange" ViewStateMode="Enabled" ID="gv" runat="server">
            </asp:GridView>
       
<%--
        </ContentTemplate>
        </asp:UpdatePanel>--%>
       <%-- <asp:UpdatePanelAnimationExtender
            id="upae1"
            TargetControlID="up1"
            runat="server">
        <Animations>
            <OnUpdating>
            <Color
                Duration="0.5"
                Fps="20"
                Property="style"
                PropertyKey="backgroundColor"
                StartValue="#FFFFFF"
                EndValue="#FFFF90" />

            </OnUpdating>
            <OnUpdated>
            <Color
                Duration="1"
                Fps="20"
                Property="style"
                PropertyKey="backgroundColor"
                StartValue="#FFFF90"
                EndValue="#FFFFFF" />
            </OnUpdated>
        </Animations>
        </asp:UpdatePanelAnimationExtender>--%>


<%--<script type="text/javascript">
    function setBodyHeightToContentHeight() {
        document.body.style.height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) + "px";
    }

    setBodyHeightToContentHeight();

    // Uncomment the line below if you are having problem while resizing the browser window.
    // window.attachEvent('onresize', setBodyHeightToContentHeight);
</script>--%>