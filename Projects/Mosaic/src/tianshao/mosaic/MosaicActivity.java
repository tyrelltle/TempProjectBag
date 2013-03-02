package tianshao.mosaic;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;

import android.app.Activity;
import android.app.ActivityManager.MemoryInfo;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Bitmap.Config;
import android.graphics.BitmapFactory;
import android.graphics.Point;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.util.Log;
import android.view.Display;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

public class MosaicActivity extends Activity {
    private static final int SELECT_PHOTO = 0;
	/** Called when the activity is first created. */
    ColorMap colormap;
    Bitmap yourSelectedImage;
    ImageView img;
	ProgressDialog progressBar;
	private Handler progressBarHandler = new Handler();
	int dimh=20;
	int dimw=20;
    @Override
    
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        progressBar=new ProgressDialog(this);
        Button add=(Button)findViewById(R.id.fetch);
        Button select=(Button)findViewById(R.id.select);
        try {
			getcolormap();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
        
        
        select.setOnClickListener(new Button.OnClickListener(){

			public void onClick(View arg0) {
				
				Intent photoPickerIntent = new Intent(Intent.ACTION_PICK);
				photoPickerIntent.setType("image/*");
				startActivityForResult(photoPickerIntent, SELECT_PHOTO); 		
			}

        });
        
        add.setOnTouchListener(new Button.OnTouchListener(){

			public boolean onTouch(View arg0, MotionEvent arg1) {

				try {
					colormap.generate(openFileOutput("public.dat", Context.MODE_PRIVATE));
				} catch (FileNotFoundException e) {
					
					e.printStackTrace();
				}
				colormap.get();
				
			    return false;
			}});
    }
	private void getcolormap() throws IOException {
		if(colormap==null)
			try {
				File f=new File(getFilesDir ().getAbsolutePath()+"/public.dat");
				colormap=new ColorMap(this);
				if(!f.exists())
					colormap.generate(openFileOutput("public.dat", Context.MODE_PRIVATE));
				else
					colormap.read(openFileInput("public.dat"));

			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		
	}
	
	
	@Override
	protected void onActivityResult(int requestCode, int resultCode, Intent imageReturnedIntent) { 
	    super.onActivityResult(requestCode, resultCode, imageReturnedIntent); 

	    switch(requestCode) { 
	    case SELECT_PHOTO:
	        if(resultCode == RESULT_OK){  
	            Uri selectedImage = imageReturnedIntent.getData();
	            
	            //yourSelectedImage = BitmapFactory.decodeStream(imageStream);
	            yourSelectedImage=loadImg(selectedImage);
	            yourSelectedImage=yourSelectedImage.copy(yourSelectedImage.getConfig(), true);
	            img=(ImageView)findViewById(R.id.image);
	            img.setImageBitmap(yourSelectedImage);
	    		progressBar.setCancelable(false);
	    		progressBar.setMessage("processing images");
	    		progressBar.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
	    		progressBar.setProgress(0);
	    		progressBar.setMax(dimw*dimh);
	    		progressBar.show();
	            new Thread(new Runnable() {
					  public void run() {
					            Generator g=new Generator(colormap.map,yourSelectedImage, dimw, dimh,  progressBar, progressBarHandler);
					            g.generate();
					            runOnUiThread(new Runnable() {
					                public void run() {
					                	img.setImageBitmap(yourSelectedImage);
					               }
					           });
					            progressBarHandler.post(new Runnable() {
									public void run() {
										
									  progressBar.cancel();
									  progressBar.dismiss();
									}
								  });
					            try {
					            	File f=Environment.getExternalStorageDirectory();
					                FileOutputStream out = new FileOutputStream(f.getAbsolutePath() + "/DCIM/converted.png");
					                yourSelectedImage.compress(Bitmap.CompressFormat.PNG, 90, out);

					                
					         } catch (Exception e) {
					                e.printStackTrace();
					         }
					  }}).start();

	        }
	    }
	}
	
	Bitmap loadImg(Uri selectedImage)
	{
		InputStream imageStream=null;
		try {
			imageStream = getContentResolver().openInputStream(selectedImage);
		} catch (FileNotFoundException e) {
			
			e.printStackTrace();
		}
		
		
		final BitmapFactory.Options options = new BitmapFactory.Options();
		options.inJustDecodeBounds = true;
		BitmapFactory.decodeStream(imageStream,null,options);
		Display display = getWindowManager().getDefaultDisplay();
		Point size = new Point();
		display.getSize(size);
		options.inSampleSize=1;
		if(options.outHeight>size.y||options.outWidth>size.x)
		{
			
		    
		        if (options.outWidth > options.outHeight) {
		            options.inSampleSize = Math.round((float)options.outHeight / (float)size.y);
		        } else {
		        	options.inSampleSize = Math.round((float)options.outWidth / (float)size.x);
		        }
		    
		}
		try {
			imageStream = getContentResolver().openInputStream(selectedImage);
		} catch (FileNotFoundException e) {
			
			e.printStackTrace();
		}
		options.inJustDecodeBounds = false;
		Bitmap ret=BitmapFactory.decodeStream(imageStream,null,options);
		return ret;
	}
}

