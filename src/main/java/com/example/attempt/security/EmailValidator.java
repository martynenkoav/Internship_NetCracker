package com.example.attempt.security;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator {
    public static final String EMAIL_PATTERN =
            "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
                    + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

    public static boolean validate(String emailAddress, String EMAIL_PATTERN) {
        return Pattern.compile(EMAIL_PATTERN)
                .matcher(emailAddress)
                .matches();
    }
}
