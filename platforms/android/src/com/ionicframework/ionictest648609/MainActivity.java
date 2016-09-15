/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.ionicframework.ionictest648609;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.apache.cordova.*;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewEngine;

public class MainActivity extends CordovaActivity {
    private  TextView textView;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
       // super.init();
        textView = (TextView) findViewById(R.id.name);
        textView.setText("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        loadUrl(launchUrl);
        IntentFilter callLogFilter = new IntentFilter();
        callLogFilter = new IntentFilter();
        callLogFilter.addAction("leftAction");
        registerReceiver(mLeftReceiver,callLogFilter);

        //点击调用js中方法
        textView.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
            //调用JS
            loadUrl("javascript:test()");
          }
        });
    }

    @Override
    protected CordovaWebView makeWebView() {
      SystemWebView webView = (SystemWebView)findViewById(R.id.cordovaWebView);
      return new CordovaWebViewImpl(new SystemWebViewEngine(webView));
    }

    @Override
    protected void createViews() {
      if (preferences.contains("BackgroundColor")) {
        int backgroundColor = preferences.getInteger("BackgroundColor", Color.BLACK);
        appView.getView().setBackgroundColor(backgroundColor);
      }
      appView.getView().requestFocusFromTouch();
    }

    public void setText(String text){
      textView.setText(text);
    }

    BroadcastReceiver mLeftReceiver = new BroadcastReceiver() {
      @Override
      public void onReceive(Context context, Intent intent){
        setText(intent.getStringExtra("msg"));
      }
    };
}
