package shaotian.android.blackboard;

import java.io.Serializable;
import java.lang.reflect.Field;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.Point;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.Switch;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;
import shaotian.android.blackboard.R;
import shaotian.android.blackboard.Drawable.DrawableContext;
import shaotian.android.blackboard.Drawable.DrawableStore;
import shaotian.android.blackboard.Model.DrawShapeModel;
import shaotian.android.blackboard.View.BBView;
import shaotian.android.blackboard.command.CommandFactory;
import shaotian.android.blackboard.command.EraseCommand;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.utility.ColorPanelOnTouchListener;
import shaotian.android.blackboard.utility.Pallette;
import shaotian.android.blackboard.utility.SupportColors;

public class BlackBoardActivity extends Activity {
    /** Called when the activity is first created. */
	TextView txt_cur;BBView view;
	Context bbviewcontext=null;
	public static boolean editmode=false;
	public static Resources resource=null;
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	resource=getResources();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
       // TextView t=(TextView)findViewById(R.id.text);
         view=(BBView)findViewById(R.id.BBView);
        DrawShapeModel model=new DrawShapeModel();
        DrawShapeController controller=null;
		try {
			controller = DrawShapeController.Instance(model,view,this.getApplicationContext());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        view.addController(controller);
        model.addObserver(view);
     
        setupMenu();
       
        bbviewcontext=view.getContext();
    }
   
    private void setupMenu() {
  
		Button add=(Button)findViewById(R.id.btn_addsize);
		Button dec=(Button)findViewById(R.id.btn_decsize);
		Button undo=(Button)findViewById(R.id.btn_undo);
		Button redo=(Button)findViewById(R.id.btn_redo);
		Switch sel=(Switch)findViewById(R.id.switch_freeselect);
		final Button col=(Button)findViewById(R.id.btn_color);
		
	    sel.setOnTouchListener(new Switch.OnTouchListener() {
				public boolean onTouch(View arg0, MotionEvent arg1) {
					// TODO Auto-generated method stub
					if(arg1.getAction()!=MotionEvent.ACTION_DOWN)
						return false;
					
					try {
						BlackBoardActivity.editmode=!BlackBoardActivity.editmode;
						((Switch)arg0).setChecked(BlackBoardActivity.editmode);
						
						
					} catch (Exception e) {
						// TODO Auto-generated catch block
						System.out.print("switch edit failed");
					}
					return true;
				}
	         });
	    undo.setOnTouchListener(new Button.OnTouchListener() {
				public boolean onTouch(View arg0, MotionEvent arg1) {
					// TODO Auto-generated method stub
					if(arg1.getAction()!=MotionEvent.ACTION_DOWN)
						return false;
					
					try {
						CommandFactory.Instance().undo();
					} catch (Exception e) {
						// TODO Auto-generated catch block
						System.out.print("undo failed");
					}
					return true;
				}
	         });
	    redo.setOnTouchListener(new Button.OnTouchListener() {
				public boolean onTouch(View arg0, MotionEvent arg1) {
					// TODO Auto-generated method stub
					if(arg1.getAction()!=MotionEvent.ACTION_DOWN)
						return false;
					
					try {
						CommandFactory.Instance().redo();
					} catch (Exception e) {
						// TODO Auto-generated catch block
						System.out.print("redo failed");
					}
					return true;
				}
	         });
	    add.setOnTouchListener(new Button.OnTouchListener() {
				public boolean onTouch(View arg0, MotionEvent arg1) {
					// TODO Auto-generated method stub
					if(arg1.getAction()!=MotionEvent.ACTION_DOWN)
						return false;
					float pre=Pallette.Instance().size;
					
					try {
						CommandFactory.Instance().newSizeCommand(pre,pre+1);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					return true;
				}
	         });
	    dec.setOnTouchListener(new Button.OnTouchListener() {
				public boolean onTouch(View arg0, MotionEvent arg1) {
					// TODO Auto-generated method stub
					if(arg1.getAction()!=MotionEvent.ACTION_DOWN)
						return false;
					float pre=Pallette.Instance().size;
					try {
						CommandFactory.Instance().newSizeCommand(pre,pre-1);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					return true;
				}
	         });
	    
	    col.setOnTouchListener(new Button.OnTouchListener() {
				public boolean onTouch(View arg0, MotionEvent arg1) {
					if(arg1.getAction()!=MotionEvent.ACTION_DOWN)
						return false;
					// TODO Auto-generated method stub
				//	float pre=Pallette.Instance().Color;
					//CommandFactory.Instance().newSizeCommand(pre, pre-1);
					final Dialog d=new Dialog(col.getContext());
					
				
					TableLayout table=new TableLayout(col.getContext());
					
					table.setStretchAllColumns(true); 					
					TableRow curRow=new TableRow(col.getContext());
					int i=1;
					for(SupportColors color:SupportColors.values())
					{
						if(i%4!=0)
						{
							Button v=new Button(col.getContext());
							v.setBackgroundColor(color.getCode());
							v.setOnTouchListener(new ColorPanelOnTouchListener(color.getCode(), d) );
							curRow.addView(v);
							
						}
						else{
							table.addView(curRow);
							curRow=new TableRow(col.getContext());
							
						}
						i++;
					}
					d.requestWindowFeature(Window.FEATURE_NO_TITLE);
					d.setContentView(table);
					if(!d.isShowing())
					d.show();
				
					return false;
				}
	         });
		
	}
	@Override
    public boolean onCreateOptionsMenu(Menu menu) {
    	menu.add(Menu.NONE, Menu.FIRST + 1, 5, "Image");
    	menu.add(Menu.NONE, Menu.FIRST + 2, 5, "Soft Line");
    	menu.add(Menu.NONE, Menu.FIRST + 3, 5, "Erase");
    	menu.add(Menu.NONE, Menu.FIRST + 4, 5, "Text");
        return true;
    }
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
	    // Handle item selection
	    switch (item.getItemId()) {
	        case Menu.FIRST + 1:
	            Pallette.Instance().drawableID=DrawableStore.Instance().getPoint();
		        
	        	//startActivityForResult(new Intent(Intent.ACTION_PICK),0);
	        	
		
		
	            return true;
	        case Menu.FIRST + 2:
	        	Pallette.Instance().drawableID=DrawableStore.Instance().getCurve();
	            return true;
	        case Menu.FIRST + 3:
	        	Pallette.Instance().drawableID=DrawableStore.Instance().getEraser();
	            return true;    
	        case Menu.FIRST + 4:
	        	Pallette.Instance().drawableID=DrawableStore.Instance().getText();
	            return true; 
	        default:
	            return super.onOptionsItemSelected(item);
	    }
	}


}