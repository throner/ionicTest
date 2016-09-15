package org.apache.cordova.myplugin;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by Administrator on 2016-8-8.
 */
public class MyPlugin extends CordovaPlugin {
  private CordovaInterface mCordova=null;
  private CallbackContext context;

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    mCordova=cordova;
    super.initialize(cordova, webView);
  }

  @Override
  public void onDestroy() {
    if (mCordova != null) {
      mCordova = null;
    }

    super.onDestroy();
  }

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    context=callbackContext;
    if(action.equals("test")){
      Log.i("aaa","tttt");
      callbackContext.success("tttt");
    }
    return true;
  }
}
