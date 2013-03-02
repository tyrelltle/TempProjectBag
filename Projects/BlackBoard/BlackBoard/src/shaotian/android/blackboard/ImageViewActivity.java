package shaotian.android.blackboard;

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
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.Button;
import android.widget.GridView;
import android.widget.Switch;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;
import android.widget.Toast;
import shaotian.android.blackboard.R;
import shaotian.android.blackboard.Drawable.DrawableStore;
import shaotian.android.blackboard.Model.DrawShapeModel;
import shaotian.android.blackboard.View.BBView;
import shaotian.android.blackboard.command.CommandFactory;
import shaotian.android.blackboard.command.EraseCommand;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.utility.ColorPanelOnTouchListener;
import shaotian.android.blackboard.utility.ImageAdapter;
import shaotian.android.blackboard.utility.Pallette;
import shaotian.android.blackboard.utility.SupportColors;

public class ImageViewActivity extends Activity {
	private ImageAdapter adapter;
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	
        super.onCreate(savedInstanceState);
        try {
			adapter=new ImageAdapter(this);
		} catch (IllegalArgumentException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IllegalAccessException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        setContentView(R.layout.imagepanel);
        GridView gv=(GridView)findViewById(R.id.imagegridview);
        try {
			gv.setAdapter(new ImageAdapter(this));
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        gv.setOnItemClickListener(new OnItemClickListener() {
         
			public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
					long arg3) {
				//Pallette.Instance().picture=adapter.imgs.get(arg2);
				//startActivity(new Intent(Intent.ACTION_EDIT));
				Intent i=new Intent();
				i.putExtra("img", adapter.imgs.get(arg2));
				setResult(RESULT_OK, i);
				finish();
			}
        });
    }
   
}