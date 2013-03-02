package shaotian.android.blackboard.command;

import java.util.ArrayList;
import java.util.UUID;

import shaotian.android.blackboard.controller.Controller;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.utility.Pair;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
public class EraseCommand implements Command{


	DrawableContextNode n;
	int i;
	int x;int y;
	static UUID specialid=UUID.randomUUID();
	public EraseCommand()
	{
	
	}
	
	public static UUID getSpecialid()
	{return specialid;}
	public EraseCommand(int x,int y,int i) throws Exception
	{this.x=x;
	 this.y=y;
	
	 this.i=i;
	 this.execute(); 
	}
	public void undo() throws Exception {
		
		DrawShapeController c=DrawShapeController.Instance(null,null,null);
		c.addNode(n, i);	    	
	}

	public void redo() throws Exception
	{
		DrawShapeController c=DrawShapeController.Instance(null,null,null);
		this.execute();
	}
	public void execute() throws Exception {
		DrawShapeController c=DrawShapeController.Instance(null,null,null);
		
		n=c.erase(i);
		
	}

}
