import com.i18n.reactnativei18n.ReactNativeI18n;  // <-- Add to ReactNativeI18n to the imports

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new ReactNativeI18n() // <-- Add it to the packages list
    );	
}