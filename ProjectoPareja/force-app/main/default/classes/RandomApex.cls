public with sharing class RandomApex {
    public RandomApex() {
       
    }
    @AuraEnabled
    public static Double random() {
        return (Math.random() * 300) + 100;
    }
}