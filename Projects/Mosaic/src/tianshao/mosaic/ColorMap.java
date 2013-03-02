package tianshao.mosaic;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.app.ProgressDialog;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Environment;
import android.os.Handler;
import android.util.Log;
import android.util.Pair;

public class ColorMap {
	ArrayList<Pair<String, Integer>> map;
	FileOutputStream fout;
	FileInputStream fin;
	ProgressDialog progressBar;
	Context context;
	private Handler progressBarHandler = new Handler();
	int step=0;
	static final int inSampleSize=2;
	public ColorMap(Context context) throws IOException
	{
	
		
		
		map=new ArrayList<Pair<String, Integer>>();
		//File f=new File(dir);
		this.context=context;
		
		progressBar = new ProgressDialog(context);
		progressBar.setCancelable(false);
		progressBar.setMessage("scanning images");
		progressBar.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
		progressBar.setProgress(0);

		
	}

	

	public ArrayList<Pair<String, Integer>> get()
	{
		return map;
		
	}

	public void read(FileInputStream fi) throws IOException
	{
		
		
		this.fin=fi;
	    
	    progressBar.setMessage("scanning images");
		progressBar.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
		progressBar.show();
		new Thread(new Runnable() {
			  public void run() {
				    
				  	DataInputStream in = new DataInputStream(fin);
				    BufferedReader br = new BufferedReader(new InputStreamReader(in));
				    String val=null;
				    String key=null;
				    map.clear();
				    try {
						while((key=br.readLine())!=null&&(val=br.readLine())!=null)
						{
							
							map.add(new Pair<String, Integer>(key, Integer.parseInt(val)));
							
						}
					} catch (NumberFormatException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				     key=null;
				     
				    Log.d("READ","finish");
				    progressBarHandler.post(new Runnable() {
						public void run() {
							progressBar.cancel();
							progressBar.dismiss();
						}});
			  }}).start();
	}
	
	
	public void generate(FileOutputStream fo)
	{
		map.clear();
		final File f=new File("/sdcard/DCIM/Camera/");
		progressBar.setMax(f.listFiles().length); 
		progressBar.setMessage("calculating average color of all your photos");
		progressBar.show();
		this.fout=fo;
		new Thread(new Runnable() {
			  public void run() {
					OutputStreamWriter osw=new OutputStreamWriter(fout);			
					
					if(f==null || !f.exists())
						return ;
					int avgR,avgG,avgB,avgcolor;
					
					for( File i : f.listFiles())
					{				
						
						BitmapFactory.Options options = new BitmapFactory.Options();
						options.inSampleSize=ColorMap.inSampleSize;
						Bitmap bitmap = Bitmap.createScaledBitmap(BitmapFactory.decodeFile(i.getAbsolutePath(),options),100, 100, false);
				
						avgR=avgG=avgB=0;	
						progressBarHandler.post(new Runnable() {
							public void run() {
								step++;
							  progressBar.setProgress(step);
							}
						  });
						for(int j=0;j<bitmap.getWidth();j++)
						{
							for(int w=0;w<bitmap.getHeight();w++)
							{
								
								int c=bitmap.getPixel(j, w);
								avgR+=Color.red(c);
								avgG+=Color.green(c);
								avgB+=Color.blue(c);
								
							}
							
						}
						File f=Environment.getExternalStorageDirectory();
		                FileOutputStream out;
		                String str=f.getAbsolutePath() + "/mosaicimg/"+i.getName();
						try {
							out = new FileOutputStream(str);
							bitmap.compress(Bitmap.CompressFormat.JPEG,90, out);
							out.flush();
							out.close();
						} catch (FileNotFoundException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					
						int count=bitmap.getHeight()*bitmap.getWidth();
						avgcolor=Color.rgb(avgR/count, avgG/count, avgB/count);
						try {
							osw.write(str+"\r\n"+avgcolor+"\r\n");
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}	
						
						
		                
						map.add(new Pair<String, Integer>(str, avgcolor));
				
						
					}
					
					try {
						osw.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					progressBarHandler.post(new Runnable() {
						public void run() {
							step=0;
						  progressBar.cancel();
						  progressBar.dismiss();
						}
					  });
			  }}).start();
	}
	


}



/*package tianshao.mosaic;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.app.ProgressDialog;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Handler;
import android.util.Log;
import android.util.Pair;

public class ColorMap {
	ArrayList<Pair<String, Integer>> map;
	FileOutputStream fout;
	FileInputStream fin;
	ProgressDialog progressBar;
	Context context;
	private Handler progressBarHandler = new Handler();
	int step=0;
	static final int inSampleSize=2;
	public ColorMap(Context context) throws IOException
	{
	
		
		
		map=new ArrayList<Pair<String, Integer>>();
		//File f=new File(dir);
		this.context=context;
		
		progressBar = new ProgressDialog(context);
		progressBar.setCancelable(false);
		progressBar.setMessage("scanning images");
		progressBar.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
		progressBar.setProgress(0);

		
	}

	

	public ArrayList<Pair<String, Integer>> get()
	{
		return map;
		
	}

	public void read(FileInputStream fi) throws IOException
	{
		
		
		this.fin=fi;
	    
	    progressBar.setMessage("scanning images");
		progressBar.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
		progressBar.show();
		new Thread(new Runnable() {
			  public void run() {
				    
				  	DataInputStream in = new DataInputStream(fin);
				    BufferedReader br = new BufferedReader(new InputStreamReader(in));
				    String val=null;
				    String key=null;
				    map.clear();
				    try {
						while((key=br.readLine())!=null&&(val=br.readLine())!=null)
						{
							
							map.add(new Pair(key, Integer.parseInt(val)));
							
						}
					} catch (NumberFormatException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				     key=null;
				     
				    Log.d("READ","finish");
				    progressBarHandler.post(new Runnable() {
						public void run() {
							progressBar.cancel();
							progressBar.dismiss();
						}});
			  }}).start();
	}
	
	
	public void generate(FileOutputStream fo)
	{
		map.clear();
		final File f=new File("/sdcard/DCIM/Camera/");
		progressBar.setMax(f.listFiles().length); 
		progressBar.setMessage("calculating average color of all your photos");
		progressBar.show();
		this.fout=fo;
		new Thread(new Runnable() {
			  public void run() {
					OutputStreamWriter osw=new OutputStreamWriter(fout);			
					
					if(f==null || !f.exists())
						return ;
					int avgR,avgG,avgB,avgcolor;
					
					for( File i : f.listFiles())
					{				
						
						BitmapFactory.Options options = new BitmapFactory.Options();
						options.inSampleSize=ColorMap.inSampleSize;
						Bitmap bitmap = Bitmap.createScaledBitmap(BitmapFactory.decodeFile(i.getAbsolutePath(),options),100, 100, false);
				
						avgR=avgG=avgB=0;	
						progressBarHandler.post(new Runnable() {
							public void run() {
								step++;
							  progressBar.setProgress(step);
							}
						  });
						for(int j=0;j<bitmap.getWidth();j++)
						{
							for(int w=0;w<bitmap.getHeight();w++)
							{
								
								int c=bitmap.getPixel(j, w);
								avgR+=Color.red(c);
								avgG+=Color.green(c);
								avgB+=Color.blue(c);
								
							}
							
						}
						
					
						int count=bitmap.getHeight()*bitmap.getWidth();
						avgcolor=Color.rgb(avgR/count, avgG/count, avgB/count);
						try {
							osw.write(i.getAbsolutePath()+"\r\n"+avgcolor+"\r\n");
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}	
						map.add(new Pair(i.getAbsolutePath(), avgcolor));
					}
					
					try {
						osw.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					progressBarHandler.post(new Runnable() {
						public void run() {
							step=0;
						  progressBar.cancel();
						  progressBar.dismiss();
						}
					  });
			  }}).start();
	}
	


}
*/