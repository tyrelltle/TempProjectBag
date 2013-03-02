package shaotian.android.blackboard.Drawable;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;

public class DrawableContext implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public ArrayList<DrawableContextNode> nodes;
	public int curToDraw;
	
	public DrawableContext()
	{nodes=new ArrayList<DrawableContextNode>();}
	public void add(DrawableContextNode node)
	{
		if(node!=null)
		nodes.add(node);
		
        

	}
	
	public void remove(int start, int end)
	{
		for(int i=start;i<=end;i++)
			if(i<nodes.size() && i>=0)
				nodes.remove(i);
	}
	
	
	
}
