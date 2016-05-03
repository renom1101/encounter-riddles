<!DOCTYPE html>
<html ng-app="encounterApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <title>encounter</title>
    <link rel="stylesheet" type="text/css" href="/resources/assets/libs/animate/animate.css" />
    <link rel="stylesheet" type="text/css" href="/resources/app/app.css" />
    <base href="/">
</head>
<body>
    <div ng-view></div>

    <script src="resources/assets/libs/angular/angular.js"></script>
    <script src="resources/assets/libs/angular-route/angular-route.js"></script>

    <script src="resources/app/app.js"></script>
    <script src="resources/app/components/main/main.js"></script>
    <script src="resources/app/components/main/mainController.js"></script>
    <script src="resources/app/components/shared/reverseFilter.js"></script>
    <script src="resources/app/components/shared/userService.js"></script>
    <script src="resources/app/components/shared/pathProvider.js"></script>
    <script src="resources/app/components/kec5/kec5.js"></script>
    <script src="resources/app/components/kec5/login/en.js"></script>
    <script src="resources/app/components/kec5/login/enController.js"></script>
    <script src="resources/app/components/kec5/login/enService.js"></script>
    <script src="resources/app/components/kec5/countdown/countdown.js"></script>
    <script src="resources/app/components/kec5/countdown/countdownController.js"></script>
    <script src="resources/app/components/kec5/colors/colors.js"></script>
    <script src="resources/app/components/kec5/colors/colorsController.js"></script>
</body>
</html>