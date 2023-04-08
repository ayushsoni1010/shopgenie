<script></script>

<svelte:head>
    <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
    <!-- include ar.js for A-Frame -->
    <!-- include ar.js for A-Frame -->
    <!-- include ar.js for A-Frame -->
    <script
        src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"
    ></script>
</svelte:head>
<body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs>
        <!-- create your content here. just a box for now -->
        <a-entity
            position="0.5 -2 -0.5"
            scale="0.10 0.10 0.10"
            obj-model="obj: url(./gear/Gear2.obj)"
        />
        <!-- define a camera which will move according to the marker position -->
        <a-marker-camera preset="hiro" />
    </a-scene>
</body>
