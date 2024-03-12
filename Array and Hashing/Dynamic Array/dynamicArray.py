class DynamicArray:
    def __init__( self, capcity: int):
        self.capcity = capcity
        self.length = 0
        self.arr = [0] * self.capcity



    def get(self, i: int) -> int:
        return self.arr[i]
    
    def insert(self, i:int, n: int) -> None:
         self.arr[i] = n

   
    def pushback(self, n: int) -> None:
        if self.length == self.capcity:
            self.resize()
        self.arr[self.length] = n
        self.length += 1


    def popback(self) -> int:
        if self.length > 1:
           self.length -=1
        return self.arr[self.length]
 

    def resize(self) -> None:
        self.capcity = 2 * self.capcity
        newArr = [0] * self.capcity
        for i in range(self.length):
            newArr[i] = self.arr[i]
        self.arr = newArr


    def getSize(self) -> int:
        return self.length
        
    
    def getCapacity(self) -> int:
        return self.capcity



    



