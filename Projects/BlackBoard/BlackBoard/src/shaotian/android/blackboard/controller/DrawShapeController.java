package shaotian.android.blackboard.controller;
import java.lang.IllegalArgumentException;
import java.util.ArrayList;
import java.util.UUID;

import shaotian.android.blackboard.BlackBoardActivity;
import shaotian.android.blackboard.Drawable.Drawable;
import shaotian.android.blackboard.Drawable.DrawableContext;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.Drawable.DrawableStore;
import shaotian.android.blackboard.Drawable.Eraser;
import shaotian.android.blackboard.Model.Model;
import shaotian.android.blackboard.View.View;
import shaotian.android.blackboard.command.CommandFactory;
import shaotian.android.blackboard.command.EraseCommand;
import shaotian.android.blackboard.state.Manipulator;
import shaotian.android.blackboard.utility.Pair;
import shaotian.android.blackboard.utility.Pallette;
import android.content.Context;
import android.graphics.Paint;
import android.graphics.Point;
import android.view.MotionEvent;
import android.widget.Toast;

public class DrawShapeController extends Controller{

	public static DrawShapeController controller;
	private int lastDrawIndex;
	private Manipulator manipulator;
	
	public static DrawShapeController Instance(Model m, View v,Context c) throws Exception
	{
		if(m==null&&v==null&&controller==null)
			throw new Exception("exception getting singleton DrawShapecontroller:  controller, model and view are all null");
		if(controller==null)
			controller =new DrawShapeController(m,v,c);
		return controller;
	}
	public DrawShapeController(Model m, View v, Context c) {
		super(m, v,c);
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean actionPerformed(Object value) throws Exception {
		// TODO Auto-generated method stub
		Pallette pallette=Pallette.Instance();
		MotionEvent event=(MotionEvent) value;
		UUID id=pallette.drawableID;//temporary
		DrawableContext context=((DrawableContext)(model).getModel());
		int action=event.getAction();
		
		
		
		Point coordinate;
		Paint p;
		
		if(BlackBoardActivity.editmode)
		{	Pallette.Instance().curnode=null;
			DrawableContextNode n;
			for(int i=0;i<context.nodes.size();i++)
			{
				n=context.nodes.get(i);
				Drawable drawable=DrawableStore.Instance().getDrawable(n.id);
				if(drawable.hit(n, (int)event.getX(), (int)event.getY()))
				{
					Pallette.Instance().curnode=n;
					/*n.coordinate.x=(int) event.getX()-n.width/2;
					n.coordinate.y=(int) event.getY()-n.height/2;*/
					if(manipulator==null || !(manipulator.context.equals(n)))
						manipulator=drawable.getManipulator(n,view.getContext() );
					
						
					if(event.getAction()==MotionEvent.ACTION_MOVE)
						manipulator.move(event);
					else if(event.getAction()==MotionEvent.ACTION_DOWN)
						manipulator.click(event);
					
					break;
				}
			}
		
			
			view.invalidate();
			
			
		}	
	
		
		else 
		{
			//context node specific attribute
			coordinate=new Point((int)event.getX(),(int)event.getY());	
			
			p=new Paint();
			p.setColor(pallette.color);		
			p.setStrokeWidth(pallette.size);
			
			
			if(action==MotionEvent.ACTION_MOVE|| action==MotionEvent.ACTION_DOWN)
			{	
				DrawableContextNode n=new DrawableContextNode(Pallette.Instance().picture, coordinate, p, id,action);
				
				
				context.add(n);
				Manipulator m=DrawableStore.Instance().getDrawable(id).getManipulator(n, view.getContext());
				if(m!=null)
					m.create();
				//model.valueChanged();
			}
			
			if(action==MotionEvent.ACTION_UP)
				CommandFactory.Instance().newDrawCommand();
	
			//=============================================================
		
		}
		if(!BlackBoardActivity.editmode)
				manipulator=null;
		return true;
	
	}
	
	public ArrayList<DrawableContextNode> undo()
	{	
		DrawableContext context=((DrawableContext)(model).getModel());
		ArrayList<DrawableContextNode> returnls=new ArrayList<DrawableContextNode>();
		//context.remove(s,e);
		for(int i=context.nodes.size()-1;i>=0;i--)
		{	if(context.nodes.get(i)==null || context.nodes.get(i).action!=MotionEvent.ACTION_DOWN)
			{	
				returnls.add(context.nodes.remove(i));
			
			}
			else
			{	if(i>=0)
				returnls.add(context.nodes.remove(i));
				break;
			}
		}
		model.valueChanged();
		return returnls;	
		
	}

	public void redo(ArrayList<DrawableContextNode> ls)
	{
		if(ls==null)
			return;
		DrawableContext context=((DrawableContext)(model).getModel());
		for(int i=ls.size()-1;i>=0;i--)
			context.nodes.add(ls.get(i));
		model.valueChanged();
	}
	
	public void changesize(int presize, int aftersize)
	{
		if(Pallette.Instance().curnode==null)
			return;
		int w=Pallette.Instance().curnode.width;
		int h=Pallette.Instance().curnode.height;
		if(presize<aftersize)
		{	w+=aftersize;
			h+=aftersize;
		}
		else
		{	w-=aftersize;
			h-=aftersize;
		}
		
		Pallette.Instance().curnode.width=w;
		Pallette.Instance().curnode.height=h;
		
		model.valueChanged();
	}
	
	public DrawableContextNode erase(int i)
	{
		DrawableContext context=((DrawableContext)(model).getModel());
		if(i-1>=0)
		{
			context.nodes.get(i-1).action=MotionEvent.ACTION_UP;
		}
		if( i+1 <context.nodes.size())
		{
			context.nodes.get(i+1).action=MotionEvent.ACTION_DOWN;
		}
		DrawableContextNode ret=context.nodes.remove(i);
		
		model.valueChanged();
		return  ret;
		
		
		

		
	}

	public void addNode(DrawableContextNode n,int i)
	{
		((DrawableContext)(model).getModel()).nodes.add(i,n);
		model.valueChanged();
	}
}
