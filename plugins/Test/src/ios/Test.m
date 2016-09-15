/********* Test.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "MainViewController.h"

@interface Test : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;
@end

@implementation Test

- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];
    //获取显示界面的ViewController
    MainViewController * mvc = (MainViewController *)self.viewController;
    if (echo != nil && [echo length] > 0) {
        [mvc changeText:@"YYYY"];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
