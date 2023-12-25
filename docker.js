/**
 * (root: /reservation --> execute cmd (docker build ../../ -f Dockerfile -t sleeper_reservation))
 * #01-- command for build docker image
 * #02-- (../../) specifi location of the derictory containins files needed fo the build the image
 * #03-- (-f Dockerfile) specify the name of the Dockerfileto use for the build,By default, Docker looks for a file named "Dockerfile" in the build context.However, if your Dockerfile has a different name or is located in a different directory, you use the -f option followed by the path to the Dockerfile. 
 * #04-- (-t sleeper_reservation) This option is used to tag the resulting Docker image. 
 * #05--  -t:option allows you to associate a name and optionally a tag with the Docker image. In this case, the image will be tagged with the name "sleeper_reservation".
 * (root: /reservation --> docker run sleeper_reservation) for run image sleeper_reservation
 */