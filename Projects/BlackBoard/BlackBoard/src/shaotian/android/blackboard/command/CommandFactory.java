package shaotian.android.blackboard.command;

import java.util.ArrayList;

import shaotian.android.blackboard.BlackBoardActivity;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.utility.Pallette;

public class CommandFactory {

	ArrayList<Command> commands;
	ArrayList<Command> redocommands;
	public CommandFactory()
	{
		commands=new ArrayList<Command>();
		redocommands=new ArrayList<Command>();
	}
	
	
	public   void newSizeCommand(float presize,float aftersize) throws Exception
	{
		if(!BlackBoardActivity.editmode)			
			Pallette.Instance().size=aftersize;
		else
		{	
			DrawShapeController.Instance(null, null,null).changesize((int)presize, (int)aftersize);
		}
	}
	
	public   void newColorCommand(int pre,int after)
	{
		ColorCommand c=new ColorCommand(pre,after);
		//commands.add(c);
		c.execute();
	}
	
	public void newDrawCommand()
	{
		DrawCommand c=new DrawCommand();
		commands.add(c);
		
	}
	public void newEraseCommand(int x, int y, int i) throws Exception
	{
		EraseCommand c=new EraseCommand(x,y,i);
		commands.add(c);
		
	}
	public static CommandFactory Instance()
	{
		if(commandFactory==null)
			commandFactory=new CommandFactory();
		return commandFactory;
		
	}
	
	public  void undo() throws Exception
	{	Command c;
		if(commands.size()>0)
		{c=commands.remove(commands.size()-1);
		c.undo();
		redocommands.add(c);}
	}
	public void redo() throws Exception
	{
		
		Command c;
		if(redocommands.size()>0)
		{c=redocommands.remove(redocommands.size()-1);
		c.redo();
		commands.add(c);}
		
	}
	
	public static CommandFactory commandFactory;
}
