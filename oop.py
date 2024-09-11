class Person:
    
    is_person = True
    
    def __init__(self,name):
        self.name = name
        
        
    def greet(self):
        return f"hi mr {self.name} {Person.is_person}"
    
    
    @classmethod
    def date_created(cls,today,year):
        print(today,year)
    
person1 = Person('joshua')
print(person1.greet())


class Student(Person):
    pass


student = Student('joshua urasa')
print(student.greet())