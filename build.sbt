name := """play-bvh"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.6"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.6.3",
  "org.webjars" % "requirejs" % "2.2.0",
  "org.webjars" % "bootstrap" % "3.1.1-2",
  "org.webjars" % "jquery" % "3.3.1-1",
  "org.webjars.npm" % "babylon" % "7.0.0-beta.27"
)
// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"
