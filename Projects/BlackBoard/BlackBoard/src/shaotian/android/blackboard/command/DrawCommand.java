package shaotian.android.blackboard.command;

import java.util.ArrayList;

import shaotian.android.blackboard.controller.Controller;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
public class DrawCommand implements Command{

	ArrayList<DrawableContextNode> redolist;
	
	public DrawCommand()
	{
	
	}
	public void undo() throws Exception {
		
		DrawShapeController c=DrawShapeController.Instance(null,null,null);
		redolist=c.undo();
	    	
	}

	public void redo() throws Exception
	{
		DrawShapeController c=DrawShapeController.Instance(null,null,null);
		c.redo(redolist);
		redolist.clear();
	}
	public void execute() {
		
	}

}
