package shaotian.android.blackboard.View;
import java.util.Iterator;
import java.util.Observable;

import shaotian.android.blackboard.BlackBoardActivity;
import shaotian.android.blackboard.Drawable.DrawableContext;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.Drawable.DrawableStore;
import shaotian.android.blackboard.controller.Controller;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.utility.Pallette;




import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.widget.TextView;
public class BBView extends shaotian.android.blackboard.View.View {
	
    protected static int mTileSize;

    protected static int mXTileCount;
    protected static int mYTileCount;
    @SuppressWarnings("unused")
	private final Paint mPaint = new Paint();
    

	
    private DrawableContext context;
    
    
    public DrawableContext getcontext()
    {return context;}
    public void setcontext(DrawableContext c)
    {context=c;}
    
	public BBView(Context context) {
		super(context);
		new TextView(context);


	}
	public BBView(Context context, AttributeSet attr)
	{super(context,attr);
	this.setBackgroundColor(Color.WHITE);
	}
	
	public BBView(Context context,AttributeSet attr,int sty)
	{
		super(context,attr,sty);
	}
	


	@Override
	public boolean onTouchEvent(MotionEvent event) {
		// TODO Auto-generated method stub

		
		try {
			return this.controller.actionPerformed(event);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}
	

	public void update(Observable arg0, Object arg1) {
		// TODO Auto-generated method stub
	      
			this.context=(DrawableContext)arg1;
			this.invalidate();
		
	}
	

    @Override
    public void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if(context!=null)
        for(int i=0;i<this.context.nodes.size();i++)
        {    	 
        		shaotian.android.blackboard.Drawable.Drawable item=DrawableStore.Instance().getDrawable(context.nodes.get(i).id);
	        	context.curToDraw=i; 
        		item.Draw(canvas, context);
        }   	
	    
        if(BlackBoardActivity.editmode)
        {	
        	DrawableContextNode n=Pallette.Instance().curnode;
        	if(n!=null)
        	(DrawableStore.Instance().getDrawable(n.id)).highlight(canvas, n);
        
        }
    }


}
