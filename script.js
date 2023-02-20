// SET UP FUNCTIONS FOR WEBSITE LAYOUT

var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="white";

    document.getElementById("quote-id").remove(); 
    document.getElementById("author-id").remove(); 
} 


// -------------------------------------------------------------------------------------------------------------//
// BUBBLE SORT PART
// SET UP FUNCTIONS FOR SORTING

var BUBBLE_ANIMATIONSPEED = 100; 
var sliderBubble = document.getElementById("RangeBubble");
var outputBubble = document.getElementById("0");

outputBubble.innerHTML = " medium";

sliderBubble.oninput = function() {
    if (this.value == 1) {
      outputBubble.innerHTML = " slow";
      BUBBLE_ANIMATIONSPEED = 200; 
      
    } else if (this.value == 2) {
      outputBubble.innerHTML = "medium";
      BUBBLE_ANIMATIONSPEED = 100; 
    } else {
      outputBubble.innerHTML = " fast";
      BUBBLE_ANIMATIONSPEED = 0; 
    }
}

var A = new Array(); 

function bubble_initialization() {
    document.getElementById("container-bubbleSort-id").innerHTML = ""; 
    A = [];
    for (let i = 0; i < 200; i++) {
        var num = Math.floor(Math.random() * 99) + 1; 
        A.push(num);  
    }
    bubble_generateBars(); 
}

function bubble_generateBars(indices) { 
    document.getElementById("container-bubbleSort-id").innerHTML = "";
    for (let i = 0; i < A.length; i++) {
        const bar = document.createElement("div"); 
        bar.style.height = A[i] + "%"; 
        bar.classList.add("bar"); 

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor="red"; 
        }
         
        document.getElementById("container-bubbleSort-id").appendChild(bar);
    }
}

// ANIMATION

function bubble_sort() {  // sort button
    document.getElementById("init-bubble-id").disabled = true; 
    document.getElementById("sort-bubble-id").disabled = true; 
    document.getElementById("init-bubble-id").style.opacity = "0.7"; 
    document.getElementById("sort-bubble-id").style.opacity = "0.7"; 

    var helper_A = [...A]; 
    var animations = bubbleSort(helper_A); 
    bubble_playAnimation(animations);  
}

function bubble_playAnimation(animations) {
    if (animations.length === 0) {
        bubble_generateBars(); 

        document.getElementById("init-bubble-id").disabled = false; 
        document.getElementById("sort-bubble-id").disabled = false;
        document.getElementById("init-bubble-id").style.opacity = ""; 
        document.getElementById("sort-bubble-id").style.opacity = "";

        return;
    } 
    
    let type = animations[0].shift(); 
    if (type === "swap") {
        const [i, j] = animations.shift(); 
        [A[i], A[j]] = [A[j], A[i]]; 
        bubble_generateBars([i, j]); 
    } else {
        const[i, j] = animations.shift(); 
        bubble_generateBars([i, j]); 
    }


    setTimeout(function() {
        console.log(BUBBLE_ANIMATIONSPEED); 
        bubble_playAnimation(animations); 
    }, BUBBLE_ANIMATIONSPEED); 
}

// BUBBLE SORT 

function bubbleSort(arr) {
    const animations = [];  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i ; j++) {
            if (arr[j] < arr[j-1]) {
                animations.push(["swap", j, j-1])      // storing the swaps
                var tmp = arr[j]; 
                arr[j] = arr[j-1]; 
                arr[j-1] = tmp; 
            }
            else animations.push(["comparison", j, j-1]);
        }
    }
    return animations; 
}

// COPY CODE

function copyBubble() {
    const textArea = document.createElement("textarea"); 
    textArea.value = 
    "public void bubbleSort(int[] array) {" +
    "\n    for (int i = 0; i < array.length; i++) {" +
    "\n        for (int j = 1; j < array.length - i; j++) {" + 
    "\n             if (array[j] < array[j-1]) {" +
    "\n                 int tmp = array[j];" + 
    "\n                 array[j] = array[j-1];" + 
    "\n                 array[j-1] = tmp;" + 
    "\n             }" + 
    "\n         }" + 
    "\n     }" + 
    "\n}"; 
    document.body.append(textArea); 

    textArea.select(); 
    document.execCommand('Copy'); 
    document.body.removeChild(textArea); 
}


// -------------------------------------------------------------------------------------------------------------//
// SELECTION SORT PART


var SELECTION_ANIMATIONSPEED = 100; 
var sliderSelection = document.getElementById("RangeSelection");
var outputSelection = document.getElementById("1");

outputSelection.innerHTML = " medium";

sliderSelection.oninput = function() {
    if (this.value == 1) {
        outputSelection.innerHTML = " slow";
        SELECTION_ANIMATIONSPEED = 400; 
      
    } else if (this.value == 2) {
        outputSelection.innerHTML = "medium";
        SELECTION_ANIMATIONSPEED = 200; 
    } else {
        outputSelection.innerHTML = " fast";
        SELECTION_ANIMATIONSPEED = 20; 
    }
}

var B = new Array(); 

function selection_initialization() {
    document.getElementById("container-selectionSort-id").innerHTML = ""; 
    B = [];
    for (let i = 0; i < 200; i++) {
        var num = Math.floor(Math.random() * 99) + 1; 
        B.push(num);  
    }
    selection_generateBars(); 
}

function selection_generateBars(indices) { 
    document.getElementById("container-selectionSort-id").innerHTML = "";
    for (let i = 0; i < B.length; i++) {
        const bar = document.createElement("div"); 
        bar.style.height = B[i] + "%"; 
        bar.classList.add("bar"); 

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor="red"; 
        }
         
        document.getElementById("container-selectionSort-id").appendChild(bar);
    }
}

// ANIMATION

function selection_sort() {  // sort button
    document.getElementById("init-selection-id").disabled = true; 
    document.getElementById("sort-selection-id").disabled = true;
    document.getElementById("init-selection-id").style.opacity = "0.7"; 
    document.getElementById("sort-selection-id").style.opacity = "0.7"; 
    
    var helper_B = [...B]; 
    var animations = selectionSort(helper_B); 

    selection_playAnimation(animations);  
}

function selection_playAnimation(animations) {
    if (animations.length === 0) {
        selection_generateBars(); 

        document.getElementById("init-selection-id").disabled = false; 
        document.getElementById("sort-selection-id").disabled = false;
        document.getElementById("init-selection-id").style.opacity = ""; 
        document.getElementById("sort-selection-id").style.opacity = ""; 

        return;
    } 
    const [i, j] = animations.shift(); 
    if (animations.length % 2 == 0) {
        [B[i], B[j]] = [B[j], B[i]]; 
    }

    selection_generateBars([i, j]); 

    setTimeout(function() {
        selection_playAnimation(animations); 
    }, SELECTION_ANIMATIONSPEED); 
}

// Selection SORT 

function selectionSort(arr) {
    const animations = [];  
    
    for (let i = 0; i < arr.length; i++) {
        var opt = i; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[opt]) {
                opt = j; 
            }
        }
        var tmp = arr[i]; 
        arr[i] = arr[opt]; 
        arr[opt] = tmp; 
        animations.push([i, opt]);
        animations.push([i, opt]);  
    }
    console.log(arr); 
    return animations; 
}

// COPY

function copySelection() {
    const textArea = document.createElement("textarea"); 
    textArea.value = 
    "public void selectionSort(int[] array) {" +
	"\n     for (int i = 0; i < array.length; i++) {" +
	"\n         int opt = i;" + 
	"\n         for (int j = i + 1; j < array.length; j++) {" +
	"\n             if (array[j] < array[opt]) {" +
    "\n                 opt = j;" + 
    "\n             }" +
    "\n         }" +
    "\n         int tmp = array[i];" +
    "\n         array[i] = array[opt];" +
    "\n         array[opt] = tmp;" +
    "\n     }" +
	"\n}";
    document.body.append(textArea); 

    textArea.select(); 
    document.execCommand('Copy'); 
    document.body.removeChild(textArea);
}


// -------------------------------------------------------------------------------------------------------------//
// INSERTION SORT PART

var INSERTION_ANIMATIONSPEED = 100; 
var sliderInsertion = document.getElementById("RangeInsertion");
var outputInsertion = document.getElementById("2");

outputInsertion.innerHTML = " medium";

sliderInsertion.oninput = function() {
    if (this.value == 1) {
        outputInsertion.innerHTML = " slow";
        INSERTION_ANIMATIONSPEED = 400; 
      
    } else if (this.value == 2) {
        outputInsertion.innerHTML = "medium";
        INSERTION_ANIMATIONSPEED = 100; 
    } else {
        outputInsertion.innerHTML = " fast";
        INSERTION_ANIMATIONSPEED = 0; 
    }
}


var C = new Array(); 

function insertion_initialization() {
    document.getElementById("container-insertionSort-id").innerHTML = ""; 
    C = [];
    for (let i = 0; i < 200; i++) {
        var num = Math.floor(Math.random() * 99) + 1; 
        C.push(num);  
    }
    insertion_generateBars(); 
}

function insertion_generateBars(indices) { 
    document.getElementById("container-insertionSort-id").innerHTML = "";
    for (let i = 0; i < C.length; i++) {
        const bar = document.createElement("div"); 
        bar.style.height = C[i] + "%"; 
        bar.classList.add("bar"); 

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor="red"; 
        }
         
        document.getElementById("container-insertionSort-id").appendChild(bar);
    }
}

// ANIMATION

function insertion_sort() {  // sort button
    document.getElementById("init-insertion-id").disabled = true; 
    document.getElementById("sort-insertion-id").disabled = true; 
    document.getElementById("init-insertion-id").style.opacity = "0.7"; 
    document.getElementById("sort-insertion-id").style.opacity = "0.7";

    var helper_C = [...C]; 
    var animations = insertionSort(helper_C);  
    insertion_playAnimation(animations);  
}

function insertion_playAnimation(animations) {
    if (animations.length === 0) {
        insertion_generateBars(); 

        document.getElementById("init-insertion-id").disabled = false; 
        document.getElementById("sort-insertion-id").disabled = false;
        document.getElementById("init-insertion-id").style.opacity = ""; 
        document.getElementById("sort-insertion-id").style.opacity = "";

        return;
    } 
    if (animations[0].length === 3) { 
        const [i, j, k] = animations.shift(); 
        C[i] = j; 
        insertion_generateBars([i, k]);
    } else {
        const [i, j] = animations.shift(); 
        C[i] = C[j];  
        insertion_generateBars([i, j]);
    } 

    setTimeout(function() {
        insertion_playAnimation(animations); 
    }, INSERTION_ANIMATIONSPEED); 
}

// INSERTION SORT 

function insertionSort(arr) {
    const animations = [];  
    console.log(arr); 
    for (let i = 1; i < arr.length; i++) {
        var save = arr[i]; 
        var opt =  Math.abs(binarySearch(arr[i], 0, i-1, arr)); 
        for (let j = i-1; j >= opt; j--) {
            arr[j+1] = arr[j]; 
            animations.push([j+1, j]); 
        }
        arr[opt] = save; 
        animations.push([opt, save, i]); 
    }

    console.log(arr); 
    return animations; 
}

function binarySearch(target, left, right, arr) {

    mid = Math.floor((left + right) / 2);
  
    if (right <= left) return (target > arr[left]) ? (left + 1) : left;

    else if(target == arr[mid]) return mid + 1;
  
    else if(target > arr[mid]) return binarySearch(target, mid + 1, right, arr);
          
    else return binarySearch(target, left, mid - 1, arr);
}


// COPY

function copyInsertion() {
    const textArea = document.createElement("textarea"); 
    textArea.value = 
    "public void insertionSort(int[] array) {" +
	"\n     for (int i = 0; i < array.length; i++) {" +
    "\n         int save = array[i];" +
	"\n         int opt = binarySearch(array[i], 0, i-1, array);" +
	"\n         for (int j = i-1; j >= opt; j--) {" +
	"\n             array[j+1] = array[j];" +
    "\n         }" +
    "\n         array[opt] = save;" +
    "\n     }" +
    "\n}" +

    "\nprivate int binarySearch(int target, int left, int right,int[] array) {" +
    "\n     int mid = (int) Math.floor((left + right) / 2);" +
    "\n     if (right <= left) return (target > array[left]) ? (left + 1) : left;" +
    "\n     else if (target == array[mid]) return mid + 1;" +
    "\n     else if (target > array[mid]) return binarySearch(target, mid + 1, right, array);" +
    "\n     else return binarySearch(target, left, mid - 1, array);" +
    "\n}";
    document.body.append(textArea); 

    textArea.select(); 
    document.execCommand('Copy'); 
    document.body.removeChild(textArea);
}


// -------------------------------------------------------------------------------------------------------------//
// HEAP SORT PART

var HEAP_ANIMATIONSPEED = 100; 
var sliderHeap = document.getElementById("RangeHeap");
var outputHeap = document.getElementById("3");

outputHeap.innerHTML = " medium";

sliderHeap.oninput = function() {
    if (this.value == 1) {
        outputHeap.innerHTML = " slow";
        HEAP_ANIMATIONSPEED = 500; 
      
    } else if (this.value == 2) {
        outputHeap.innerHTML = "medium";
        HEAP_ANIMATIONSPEED = 250; 
    } else {
        outputHeap.innerHTML = " fast";
        HEAP_ANIMATIONSPEED = 20; 
    }
}

var D = new Array(); 

function heap_initialization() {
    document.getElementById("container-heapSort-id").innerHTML = ""; 
    D = [];
    for (let i = 0; i < 200; i++) {
        var num = Math.floor(Math.random() * 99) + 1; 
        D.push(num);  
    }
    heap_generateBars(); 
}

function heap_generateBars(indices) { 
    document.getElementById("container-heapSort-id").innerHTML = "";
    for (let i = 0; i < D.length; i++) {
        const bar = document.createElement("div"); 
        bar.style.height = D[i] + "%"; 
        bar.classList.add("bar"); 

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor="red"; 
        }
         
        document.getElementById("container-heapSort-id").appendChild(bar);
    }
}

// ANIMATION

function heap_sort() {  // sort button
    document.getElementById("init-heap-id").disabled = true; 
    document.getElementById("sort-heap-id").disabled = true; 
    document.getElementById("init-heap-id").style.opacity = "0.7"; 
    document.getElementById("sort-heap-id").style.opacity = "0.7";

    var helper_D = [...D]; 
    var animations = heapSort(helper_D);  
    heap_playAnimation(animations);  
}

function heap_playAnimation(animations) {
    if (animations.length === 0) {
        heap_generateBars(); 

        document.getElementById("init-heap-id").disabled = false; 
        document.getElementById("sort-heap-id").disabled = false;
        document.getElementById("init-heap-id").style.opacity = ""; 
        document.getElementById("sort-heap-id").style.opacity = "";

        return;
    } 
    const [i, j] = animations.shift(); 
    [D[i], D[j]] = [D[j], D[i]]; 
    heap_generateBars([i, j]); 

    setTimeout(function() {
        heap_playAnimation(animations); 
    }, HEAP_ANIMATIONSPEED); 
}

// HEAP SORT 

var size = 0; 

function heapSort(arr) {
    const animations = [];  
    console.log(arr); 

    buildHeap(arr, animations); 

    for (let i = 0; i < arr.length; i++) {
        popMax(arr, animations); 
    }

    console.log(arr); 
    return animations; 
}

function buildHeap(arr, animations) {
    size = arr.length; 

    for (let i = Math.floor(size / 2); i >= 0; i--) {  
        restoreHeapCondition(i, arr, animations);  
    }
}

function restoreHeapCondition(root, arr, animations) {
    while ((2 * root) + 1 < size) {
        var child = (2 * root) + 1; 
        if (child + 1 < size && arr[child] < arr[child + 1]) {
            child += 1;
        }
        if (arr[root] > arr[child]) {
            return; 
        } 
        swap(root, child, arr, animations); 
        root = child; 
    } 
}

function popMax(arr, animations) {
    var value = arr[0]; 
    size -= 1;  
    swap(size, 0, arr, animations); 
    restoreHeapCondition(0, arr, animations); 
    return value; 
}

function swap(i, j, arr, animations) { 
    animations.push([i, j]); 
    var tmp = arr[i]; 
    arr[i] = arr[j]; 
    arr[j] = tmp; 
}

function copyHeap() {
    const textArea = document.createElement("textarea"); 
    textArea.value = 
    "public class MaxHeap {" +
    "\n     final static int MAX_CAPACITY = 10000;" +
    "\n     int[] heap;" +
    "\n     int size = 0;" +
    "\n" + 
    "\n     public void sort (int[] array) {" +
    "\n         buildHeap(array);" +
    "\n         for (int i = 0; i < array.length; i++) popMax();" +
    "\n     }" +
    "\n" +
    "\n     private void buildHeap(int[] array) {" +
    "\n         heap = new int[MAX_CAPACITY];" +
    "\n         size = array.length;" +
    "\n         for (int i = 0; i < size; i++) heap[i] = array[i];" +
    "\n         for (int i = size/2; i>= 0; i--) restoreHeapCondition(i);" +
    "\n     }" +
    "\n" +
    "\n     private void restoreHeapCondition(int root) {" +
    "\n         while (2 * root + 1 < size) {" +
    "\n             int child = 2 * root + 1;" +
    "\n             if (child + 1 < size && heap[child] < heap[child+1]) child += 1;" +
    "\n             if (heap[root] > heap[child]) return;" +
    "\n             swap(root, child);" +
    "\n             root = child;" +
    "\n         }" +
    "\n     }" +
    "\n" +
    "\n     private int popMax() {" +
    "\n         int value = heap[0];" +
    "\n         size -= 1;" +
    "\n         swap(0, size);" +
    "\n         restoreHeapCondition(0);" +
    "\n         return value;" +
    "\n     }" +
    "\n" +
    "\n     private void swap(int i, int j) {" +
    "\n         int tmp = heap[i];" +
    "\n         heap[i] = heap[j];" +
    "\n         heap[j] = tmp;" +
    "\n     }" +
    "\n}";
    document.body.append(textArea); 

    textArea.select(); 
    document.execCommand('Copy'); 
    document.body.removeChild(textArea);
}

// -------------------------------------------------------------------------------------------------------------//
// MERGE SORT PART

var MERGE_ANIMATIONSPEED = 150; 
var sliderMerge = document.getElementById("RangeMerge");
var outputMerge = document.getElementById("4");

outputMerge.innerHTML = " medium";

sliderMerge.oninput = function() {
    if (this.value == 1) {
        outputMerge.innerHTML = " slow";
        MERGE_ANIMATIONSPEED = 500; 
      
    } else if (this.value == 2) {
        outputMerge.innerHTML = "medium";
        MERGE_ANIMATIONSPEED = 250; 
    } else {
        outputMerge.innerHTML = " fast";
        MERGE_ANIMATIONSPEED = 20; 
    }
}

var E = new Array(); 

function merge_initialization() {
    document.getElementById("container-mergeSort-id").innerHTML = ""; 
    E = [];
    for (let i = 0; i < 200; i++) {
        var num = Math.floor(Math.random() * 99) + 1; 
        E.push(num);  
    }
    merge_generateBars(); 
}

function merge_generateBars(indices) { 
    document.getElementById("container-mergeSort-id").innerHTML = "";
    for (let i = 0; i < E.length; i++) {
        const bar = document.createElement("div"); 
        bar.style.height = E[i] + "%"; 
        bar.classList.add("bar"); 

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor="red"; 
        }
         
        document.getElementById("container-mergeSort-id").appendChild(bar);
    }
}

// ANIMATION

function merge_sort() {  // sort button
    document.getElementById("init-merge-id").disabled = true; 
    document.getElementById("sort-merge-id").disabled = true; 
    document.getElementById("init-merge-id").style.opacity = "0.7"; 
    document.getElementById("sort-merge-id").style.opacity = "0.7";

    var helper_E = [...E]; 
    var animations = mergeSort(helper_E);  
    merge_playAnimation(animations);  
}

function merge_playAnimation(animations) {
    if (animations.length === 0) {
        merge_generateBars(); 

        document.getElementById("init-merge-id").disabled = false; 
        document.getElementById("sort-merge-id").disabled = false;
        document.getElementById("init-merge-id").style.opacity = ""; 
        document.getElementById("sort-merge-id").style.opacity = "";

        return;
    } 
    let type = animations[0].shift(); 
    if (type === "overwrite") {
        const [i, value, j] = animations.shift(); 
        E[i] = value;  
        merge_generateBars([i, j]);
    } else if (type  === "compare") {
        const [i, j] = animations.shift();  
        merge_generateBars([i, j]); 
    }

    setTimeout(function() {
        merge_playAnimation(animations); 
    }, MERGE_ANIMATIONSPEED); 
}

// MERGE SORT 

function mergeSort(array) {
    const animations = [];  
    console.log("A: " + array); 
    
    if (array.length <= 1) return array; 
    const auxiliaryArray = array.slice(); 
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations); 
    console.log("sorted: " + array); 
    return animations; 
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;  
    const middleIdx = Math.floor((startIdx + endIdx) / 2); 
    
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations); 
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations); 
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations); 
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx; 
    let i = startIdx; 
    let j = middleIdx + 1; 

    while (i <= middleIdx && j <= endIdx) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push(["compare", i, j]); 
            animations.push(["overwrite", k, auxiliaryArray[i], i]);
            mainArray[k++] = auxiliaryArray[i++]; 
        } else {
            animations.push(["compare", i, j]); 
            animations.push(["overwrite", k, auxiliaryArray[j], j]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) { 
        animations.push(["compare", i, i]); 
        animations.push(["overwrite", k, auxiliaryArray[i], i]);
        mainArray[k++] = auxiliaryArray[i++]; 
    }
    while (j <= endIdx) {
        animations.push(["compare", j, j]); 
        animations.push(["overwrite", k, auxiliaryArray[j], j]);
        mainArray[k++] = auxiliaryArray[j++]; 
    }
}

// COPY

function copyMerge() {
    const textArea = document.createElement("textarea"); 
    textArea.value = 
    "public void mergeSort(int[] array) {" +
    "\n     int[] auxiliaryArray = Arrays.copyOf(array, array.length);" +
    "\n     mergeSortHelper(array, 0, array.length-1, auxiliaryArray);" +
    "\n}" +
    "\n" +
    "\nprivate void mergeSortHelper(int[] mainArray, int startIdx, int endIdx, int[] auxiliaryArray) {" +
    "\n     if (startIdx == endIdx) return;" +
    "\n     int middleIdx = (startIdx + endIdx) / 2;" +
    "\n" +
    "\n     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);" +
    "\n     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);" +
    "\n     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);" +
    "\n}" +
    "\n" +
    "\nprivate void doMerge(int[] mainArray, int startIdx, int middleIdx, int endIdx, int[] auxiliaryArray) {" +
    "\n     int k = startIdx;" +
    "\n     int i = startIdx;" +
    "\n     int j = middleIdx + 1;" +
    "\n" +
    "\n     while (i <= middleIdx && j <= endIdx) {" +
    "\n         if (auxiliaryArray[i] <= auxiliaryArray[j]) {" +
    "\n             mainArray[k++] = auxiliaryArray[i++];" +
    "\n         } else {" +
    "\n             mainArray[k++] = auxiliaryArray[j++];" +
    "\n         }" +
    "\n     }" +
    "\n     while (i <= middleIdx) {" +
    "\n         mainArray[k++] = auxiliaryArray[i++];" +
    "\n     }" +
    "\n     while (j <= endIdx) {" +
    "\n         mainArray[k++] = auxiliaryArray[j++];" +
    "\n     }" +
    "\n}";
    document.body.append(textArea); 

    textArea.select(); 
    document.execCommand('Copy'); 
    document.body.removeChild(textArea);
}

// -------------------------------------------------------------------------------------------------------------//
// QUICK SORT PART


var QUICK_ANIMATIONSPEED = 200; 
var sliderQuick = document.getElementById("RangeQuick");
var outputQuick = document.getElementById("5");

outputQuick.innerHTML = " medium";

sliderQuick.oninput = function() {
    if (this.value == 1) {
        outputQuick.innerHTML = " slow";
        QUICK_ANIMATIONSPEED = 400; 
      
    } else if (this.value == 2) {
        outputQuick.innerHTML = "medium";
        QUICK_ANIMATIONSPEED = 200; 
    } else {
        outputQuick.innerHTML = " fast";
        QUICK_ANIMATIONSPEED = 0; 
    }
}

var F = new Array(); 

function quick_initialization() {
    document.getElementById("container-quickSort-id").innerHTML = ""; 
    F = [];
    for (let i = 0; i < 200; i++) {
        var num = Math.floor(Math.random() * 99) + 1; 
        F.push(num);  
    }
    quick_generateBars(); 
}

function quick_generateBars(indices) { 
    document.getElementById("container-quickSort-id").innerHTML = "";
    for (let i = 0; i < F.length; i++) {
        const bar = document.createElement("div"); 
        bar.style.height = F[i] + "%"; 
        bar.classList.add("bar"); 

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor="red"; 
        }
         
        document.getElementById("container-quickSort-id").appendChild(bar);
    }
}

// ANIMATION

function quick_sort() {  // sort button
    document.getElementById("init-quick-id").disabled = true; 
    document.getElementById("sort-quick-id").disabled = true; 
    document.getElementById("init-quick-id").style.opacity = "0.7"; 
    document.getElementById("sort-quick-id").style.opacity = "0.7";

    var helper_F = [...F]; 
    var animations = quickSort(helper_F);  
    quick_playAnimation(animations);  
}

function quick_playAnimation(animations) {
    if (animations.length === 0) {
        quick_generateBars(); 

        document.getElementById("init-quick-id").disabled = false; 
        document.getElementById("sort-quick-id").disabled = false;
        document.getElementById("init-quick-id").style.opacity = ""; 
        document.getElementById("sort-quick-id").style.opacity = "";

        return;
    } 
    const [i, j] = animations.shift(); 
    [F[i], F[j]] = [F[j], F[i]]; 
    quick_generateBars([i, j]); 

    setTimeout(function() {
        quick_playAnimation(animations); 
    }, QUICK_ANIMATIONSPEED); 
}

// QUICK SORT 

function quickSort(arr) {
    const animations = [];  
    console.log(arr); 
    
    sort(0, arr.length, arr, animations); 

    console.log(arr); 
    return animations; 
}

function sort(left, right, arr, animations) {
    if (right - left < 2) {
        return;
    } 
    
    var pivot = arr[left]; 
    var leftPartitionLength = 0; 
    var rightPartitionLength = 0; 
    var index = left; 
    
    while (index < right - rightPartitionLength) { 
        if (arr[index] > pivot) {
            rightPartitionLength += 1; 
            swap(index, right - rightPartitionLength, arr, animations); 
        }
        else if (arr[index] < pivot) {     
            swap(index, left + leftPartitionLength, arr, animations); 
            leftPartitionLength += 1; 
            index += 1; 
        }
        else {
            index += 1;  
        } 
    } 
    sort(left, left + leftPartitionLength, arr, animations); 
    sort(right - rightPartitionLength, right, arr, animations); 
}

function swap(i, j, arr, animations) { 
    animations.push([i, j]); 
    var tmp = arr[i]; 
    arr[i] = arr[j]; 
    arr[j] = tmp; 
}

function copyQuick() {
    const textArea = document.createElement("textarea"); 
    textArea.value = 
    "public void quickSort(int[] array) {" + 
    "\n     sort(0, array.length, array);" +
    "\n}" +
    "\n" +
    "\nprivate void sort(int left, int right, int[] array) {" +
    "\n     if (right - left < 2) return;" +
    "\n" +
    "\n     int pivot = array[left];" +
    "\n     int leftPartitionLength = 0;" +
    "\n     int rightPartitionLength = 0;" +
    "\n     int index = left;" +
    "\n" +
    "\n     while (index < right - rightPartitionLength) {" +
    "\n         if (array[index] > pivot) {" +
    "\n             rightPartitionLength += 1;" +
    "\n             swap(index, right - rightPartitionLength, array);" +
    "\n         } else if (array[index] < pivot) {" +
    "\n             swap(index, left + leftPartitionLength, array);" +
    "\n             leftPartitionLength += 1;" +
    "\n             index += 1;" +
    "\n         } else {" +
    "\n             index += 1;" +
    "\n         }" +
    "\n     }" +
    "\n" +
    "\n     sort(left, left + leftPartitionLength, array);" +
    "\n     sort(right - rightPartitionLength, right, array);" +
    "\n}" +
    "\n" +
    "\nprivate void swap(int i, int j, int[] array) {" +
    "\n     int tmp = array[i];" +
    "\n     array[i] = array[j];" +
    "\n     array[j] = tmp;" +
    "\n}";
    document.body.append(textArea); 

    textArea.select(); 
    document.execCommand('Copy'); 
    document.body.removeChild(textArea);
}
